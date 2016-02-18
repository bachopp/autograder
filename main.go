package main

import (
	"fmt"
	"net/http"

	"github.com/bachopp/autograder/database"
	"github.com/bachopp/autograder/jsonify"
	"github.com/gorilla/websocket"
)

var webroot = "/var/www/autograder/web/public"

// This "upgrades" browser connection to websocket.
// default for now
var upgrader = websocket.Upgrader{}

// some random vars for permission testing etc
var isAdmin bool
var isStudent bool
var isTeacher bool

// This funciton reads input on websocket and prints it back out.
func echoBack(socket *websocket.Conn) {
	for {

		// messageType is websocket protocol type, type int
		messageType, msg, err := socket.ReadMessage()

		byte, err := jsonify.GetFile("./data.json")
		if err != nil {
			fmt.Print(err)
			return
		}
		fmt.Println(string(byte))

		var lol jsonify.Request
		returned, err := jsonify.HandleRequest(byte, lol)
		fmt.Println(returned)
		socket.WriteMessage(messageType, msg)
	}
}

func wsSocket(w http.ResponseWriter, r *http.Request) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Print(err)
		return
	}
	go echoBack(socket)
}

func fileServer(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, fmt.Sprintf("%s%s", webroot, "index.html"))
}

func handler(w http.ResponseWriter, r *http.Request) {
	// TODO: write new handler for websocked connection to handle urs differently
}

func main() {
	database.DbInit("agdatabase")
	http.HandleFunc("/ws", wsSocket)
	http.Handle("/", http.FileServer(http.Dir(webroot)))
	http.ListenAndServe(":8000", nil)
}
