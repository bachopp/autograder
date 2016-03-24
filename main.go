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
	r.HandleFunc("/oauth", Handler)

	r.HandleFunc("/teacher", Handler)
	r.HandleFunc("/teacher/{course}", Handler)
	r.HandleFunc("/teacher/{course}/{groups}", Handler)
	r.HandleFunc("/teacher/{course}/{settings}", Handler)
	r.HandleFunc("/teacher/{course}/{students}", Handler)

	r.HandleFunc("/student", Handler)
	r.HandleFunc("/student/{course}", Handler)
	r.HandleFunc("/student/{course}/{groups}", Handler)
	r.HandleFunc("/student/{course}/{settings}", Handler)
	r.HandleFunc("/student/{course}/{students}", Handler)

	r.HandleFunc("/admin", Handler)
	r.HandleFunc("/admin/{course}", Handler)
	r.HandleFunc("/admin/{course}/{groups}", Handler)
	r.HandleFunc("/admin/{course}/{settings}", Handler)
	r.HandleFunc("/admin/{course}/{students}", Handler)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir(webroot)))
	http.Handle("/", r)

	http.ListenAndServe(":8000", nil)
}
