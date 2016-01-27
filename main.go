package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/websocket"
)

var webroot = "/var/www/html/autograder-frontend/"

var upgrader = websocket.Upgrader{}

type myStruct struct {
	Username  string `json: "username"`
	FirstName string `json: "firstName"`
	LastName  string `json: "lastName"`
}

func fileServer(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, fmt.Sprintf("%s%s", webroot, "web/index.html"))
}

func wsSocket(w http.ResponseWriter, r *http.Request) {
	conn, _ := upgrader.Upgrade(w, r, nil)
	go func(conn *websocket.Conn) {
		ch := time.Tick(5 * time.Second)

		for range ch {
			conn.WriteJSON(myStruct{
				Username:  "tokams",
				FirstName: "tomasz",
				LastName:  "uis.no",
			})
		}
		// for {
		// 	mType, msg, _ := conn.ReadMessage()
		//
		// 	conn.WriteMessage(mType, msg)
		//
		// 	println(string(msg))
		// }
	}(conn)
}

func main() {
	http.HandleFunc("/", fileServer)
	http.HandleFunc("/ws", wsSocket)
	http.ListenAndServe(":8004", nil)

}
