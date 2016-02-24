/*
	Changed echoBack() to handleRequest() and implemented
	request handler. Right now, only navbar-requests can be handled
*/

package main

import (
	"net/http"

	"github.com/bachopp/autograder/agsocket"
	"github.com/gorilla/mux"
)

var webroot = "/var/www/autograder/web/public"

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/ws", agsocket.AGSocket)
	r.HandleFunc("/login", agsocket.LoginHandler)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir(webroot)))

	http.Handle("/", r)
	// http.HandleFunc("/ws", agsocket.AGSocket)

	http.ListenAndServe(":8000", nil)
}
