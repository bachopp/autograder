package agsocket

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"reflect"

	"github.com/bachopp/autograder/database"
	"github.com/gorilla/websocket"
)

// Constants for communication through websocket
const (
	username = "username"
	mode     = "mode"

	ReceiveRawRoles          = "RECEIVE_RAW_ROLES"
	ReceiveCoursesForMode    = "RECEIVE_COURSES_FOR_MODE"
	ReceiveStudentsForCourse = "RECEIVE_STUDENTS_FOR_COURSE"
)

var webroot = "/var/www/autograder/web/public"

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

// AGSocket delegates websocket to clients
func AGSocket(w http.ResponseWriter, r *http.Request) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	go handleRequest(socket)
}

func handleRequest(socket *websocket.Conn) {
	for {
		msgType, msg, err := socket.ReadMessage()
		if err != nil {
			fmt.Println(err)
			return
		}

		// Creates go struct from received websocket payload
		var request Request
		err = json.Unmarshal(msg, &request)
		if err != nil {
			fmt.Println(err)
		}

		actionType := request.ActionType
		payload := request.Payload

		switch actionType {
		case ReceiveRawRoles:
			fmt.Println(string(msg))
			var err error
			user := payload.User
			u, err := database.NewUser(user)
			if err != nil {
				arr := []byte(err.Error())
				socket.WriteMessage(msgType, arr)
			}
			msg, err := json.Marshal(Response{actionType, u})
			socket.WriteMessage(msgType, msg)
		case ReceiveCoursesForMode:
			fmt.Println(string(msg))
			var err error
			user := payload.User
			u, err := database.NewUser(user)
			if err != nil {
				arr := []byte(err.Error())
				socket.WriteMessage(msgType, arr)
			}
			msg, err := json.Marshal(Response{actionType, u})
			socket.WriteMessage(msgType, msg)
		case ReceiveStudentsForCourse:
			fmt.Println(string(msg))
			var err error
			name := payload.Course
			students, err := database.GetAllUsers(name)
			if err != nil {
				arr := []byte(err.Error())
				socket.WriteMessage(msgType, arr)
			}
			msg, err := json.Marshal(Response{actionType, students})
			socket.WriteMessage(msgType, msg)
		default:
			//no op
		}
	}
}

// returns payload values as an string array
func payloadFields(payload Payload) []string {
	v := reflect.ValueOf(payload)
	// var fiedVal []string
	values := make([]interface{}, v.NumField())
	fieldVal := make([]string, v.NumField())

	for i := 0; i < v.NumField(); i++ {
		values[i] = v.Field(i).Interface()
		fieldVal[i] = values[i].(string)
	}

	return fieldVal

}
