package agsocket

import (
	"fmt"
	"log"
	"net/http"

	"github.com/bachopp/autograder/database"
	"github.com/bachopp/autograder/jsonify"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{}

func AboutHandler(w http.ResponseWriter, r *http.Request) {

	fmt.Printf("I am handling %s now\n", r.URL)

}

func LoginHandler(w http.ResponseWriter, r *http.Request) {

	fmt.Printf("I am handling %s now\n", r.URL)

}

func handleRequest(socket *websocket.Conn) {
	for {
		msgType, msg, err := socket.ReadMessage()
		if err != nil {
			fmt.Println(err)
			return
		}
		var request jsonify.Request
		// this is the request struct with all fields filled out
		err = jsonify.Structify(msg, &request)
		if err != nil {
			fmt.Println(err)
		}
		// TODO: We should fix this. Maybe a switch-case is good enough?
		switch request.RequestedElement {
		case "navbar":
			resp, err := jsonify.Unstructify(database.GetUserRoles(request.Username))
			if err != nil {
				log.Fatal(err)
			}
			socket.WriteMessage(msgType, resp)
			//return
		case "centerWrapper":
			//TODO: Handle centerwrapper
			return
		case "leftWrapper":
			//TODO: Handle leftwrapper
			return
		case "rightWrapper":
			//TODO: Handle rightwrapper
			return
		default:
			fmt.Println(string(msg))
			socket.WriteMessage(msgType, []byte("RESPONSE"))
			return
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
