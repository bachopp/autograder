package agsocket

import (
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
