/*
	Changed echoBack() to handleRequest() and implemented
	request handler. Right now, only navbar-requests can be handled
*/

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

/*
	This function handles the socket connection
	TODO: Implement and remove the websocket and request passing into
	this function. Is it possible to use pointers or something similar?
*/
func handleRequest(socket *websocket.Conn) {
	for {
		msgType, msg, err := socket.ReadMessage()
		if err != nil {
			fmt.Println(err)
			return
		}
		var request jsonify.Request
		// this is the request struct with all fields filled out
		request, err = jsonify.Structify(msg, request)
		if err != nil {
			fmt.Println(err)
			return
		}

		if request.RequestedElement == "navbar" {
			file, err := jsonify.GetFile("./data.json")
			if err != nil {
				fmt.Println(err)
				return
			}
			socket.WriteMessage(msgType, file)
		}
	}

}

func wsSocket(w http.ResponseWriter, r *http.Request) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Print(err)
		return
	}
	go handleRequest(socket)
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
