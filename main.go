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
	Username      string `json: "gitUsername"`
	FirstName     string `json: "firstName"`
	LastName      string `json: "lastName"`
	Email         string `json: "emailAddress"`
	StudentNumber string `json: "studentNumber"`
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
				FirstName: "Tomasz",
				LastName:  "Gliniecki",
			})

			_, _, err := conn.ReadMessage()

			if err != nil {
				conn.Close()
			}
		}
	}(conn)

	go func(conn *websocket.Conn) {
		mType, msg, err := conn.ReadMessage()

		for {
			conn.WriteMessage(mType, msg)
			println(string(msg))

			if err != nil {
				conn.Close()
			}

		}
	}(conn)
}

func main() {
	http.HandleFunc("/", fileServer)
	http.HandleFunc("/ws", wsSocket)
	http.ListenAndServe(":8004", nil)

}
