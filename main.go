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
func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Printf("I am handling %s now\n", r.URL)
	http.ServeFile(w, r, webroot)
}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/ws", agsocket.AGSocket)
	r.HandleFunc("/login", handler)
	r.HandleFunc("/about", handler)
	r.HandleFunc("/courses", handler)
	r.HandleFunc("/oauth", handler)

	r.HandleFunc("/teacher", handler)
	r.HandleFunc("/teacher/{course}", handler)
	r.HandleFunc("/teacher/{course}/{groups}", handler)
	r.HandleFunc("/teacher/{course}/{settings}", handler)
	r.HandleFunc("/teacher/{course}/{students}", handler)

	r.HandleFunc("/student", handler)
	r.HandleFunc("/student/{course}", handler)
	r.HandleFunc("/student/{course}/{groups}", handler)
	r.HandleFunc("/student/{course}/{settings}", handler)
	r.HandleFunc("/student/{course}/{students}", handler)

	r.HandleFunc("/admin", handler)
	r.HandleFunc("/admin/{course}", handler)
	r.HandleFunc("/admin/{course}/{groups}", handler)
	r.HandleFunc("/admin/{course}/{settings}", handler)
	r.HandleFunc("/admin/{course}/{students}", handler)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir(webroot)))
	http.Handle("/", r)

	http.ListenAndServe(":8000", nil)
}
