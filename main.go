package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"io/ioutil"
	"net/http"

	"github.com/bacheloroppgave/autograder/database"
	"github.com/gorilla/websocket"
)

var webroot = "/var/www/autograder/web/public"

type MyJSON struct {
	ElementName string `json:"elementName"`
	Roles       []struct {
		DropDownElements []struct {
			ID   string `json:"id"`
			Name string `json:"name"`
		} `json:"dropDownElements"`
		DropDownName string `json:"dropDownName"`
	} `json:"roles"`
}

type Request struct {
	FromURL      string `json:"fromURL"`
	Password     string `json:"password"`
	RequestType  string `json:"requestType"`
	RequestedURL string `json:"requestedURL"`
	Username     string `json:"username"`
}

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
		var myReq Request
		err = json.Unmarshal(msg, &myReq)

		if err != nil {
			fmt.Print(err)
			return
		}

		datafilePath := "./data.json"

		file, err := ioutil.ReadFile(datafilePath)
		if err != nil {
			fmt.Println(err)
			return
		}
		socket.WriteMessage(messageType, file)
		/* IKKE KAST DENNE DELEN AV KODEN
		jsonFile, _ := os.Open(datafilePath)
		fmt.Println(jsonFile.Read(b))
		var navbarJSON MyJSON
		err = json.NewDecoder(jsonFile).Decode(&navbarJSON)
		jsonString := string(navbarJSON)
		fmt.Println(jsonString)
		if err != nil {
			fmt.Print(err)
			return
		}
		*/
		//err = socket.WriteMessage(messageType, navbarJSON)
		//err = socket.WriteMessage(messageType, msg)
		/*if err != nil {
			fmt.Print(err)
			return
		}*/
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
