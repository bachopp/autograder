package agsocket

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/bachopp/autograder/database"
	"github.com/bachopp/autograder/jsonify"
	"github.com/gorilla/websocket"
)

var webroot = "/var/www/autograder/web/public"

var upgrader = websocket.Upgrader{}

func handleRequest(socket *websocket.Conn) {
	for {
		msgType, msg, err := socket.ReadMessage()
		if err != nil {
			fmt.Println(err)
			return
		}

		var request jsonify.Request
		err = json.Unmarshal(msg, &request)
		if err != nil {
			fmt.Println(err)
		}
		name := request.Name
		payload := request.Data.(map[string]interface{})

		switch name {
		case "navbar":

			fmt.Println(payload["username"])
			data := database.GetUserRoles(payload["username"].(string))
			response := jsonify.Request{Name: name, Data: data}

			resp, err := jsonify.Unstructify(response)
			if err != nil {
				log.Fatal(err)
			}
			socket.WriteMessage(msgType, resp)
		case "student":
			fmt.Println(payload["username"])
			data := database.GetUserRoles(payload["username"].(string))
			response := jsonify.Request{Name: name, Data: data}

			resp, err := jsonify.Unstructify(response)
			if err != nil {
				log.Fatal(err)
			}
			socket.WriteMessage(msgType, resp)
		case "centerWrapper":
			//TODO: Handle centerwrapper
			return
		case "leftWrapper":
			//TODO: Handle leftwrapper
			return
		case "rightWrapper":
			//TODO: Handle rightwrapper
			return
		case "loginform":
			fmt.Printf("user : %s logged in!", request.Username)
			socket.WriteMessage(msgType, []byte("logged in"))
		}
	}
}

func AGSocket(w http.ResponseWriter, r *http.Request) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	go handleRequest(socket)
}
