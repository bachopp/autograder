package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/websocket"
)

var webroot = "/var/www/autograder/web/public"

// This "upgrades" browser connection to websocket.
// default for now
var upgrader = websocket.Upgrader{}

// This funciton reads input on websocket and prints it back out.
func echoBack(socket *websocket.Conn) {
	for {

		// messageType is websocket protocol type, type int
		messageType, msg, err := socket.ReadMessage()
		if err != nil {
			fmt.Print(err)
			return
		}
		fmt.Println(string(msg))

		err = socket.WriteMessage(messageType, msg)
		if err != nil {
			fmt.Print(err)
			return
		}
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
func main() {

	http.HandleFunc("/ws", wsSocket)
	http.Handle("/", http.FileServer(http.Dir(webroot)))
	http.ListenAndServe(":8000", nil)

}
