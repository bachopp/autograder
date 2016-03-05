/*
	Changed echoBack() to handleRequest() and implemented
	request handler. Right now, only navbar-requests can be handled
*/

package main

import (
	"fmt"
	"net/http"

	"github.com/bachopp/autograder/agsocket"
	"github.com/gorilla/mux"
)

var webroot = "/var/www/autograder/web/public/"

func serveSingle(pattern string, filename string) {
	http.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filename)
	})
}
func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("I am handling %s now\n", r.URL)
	http.ServeFile(w, r, webroot)
}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/ws", agsocket.AGSocket)
	r.HandleFunc("/login", Handler)
	r.HandleFunc("/about", Handler)
	r.HandleFunc("/courses", Handler)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir(webroot)))
	http.Handle("/", r)

	http.ListenAndServe(":8000", nil)
}
