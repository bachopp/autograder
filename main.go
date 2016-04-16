/*
	Changed echoBack() to handleRequest() and implemented
	request handler. Right now, only navbar-requests can be handled
*/

package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/bachopp/autograder/agsocket"
	"github.com/gorilla/mux"
)

var webroot = os.Getenv("GOPATH") + "/src/github.com/bachopp/autograder/web/public/"

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

	r.HandleFunc("/Teacher", handler)
	r.HandleFunc("/Teacher/{groups}/{course}", handler)
	r.HandleFunc("/Teacher/{settings}/{course}", handler)
	r.HandleFunc("/Teacher/{students}/{course}", handler)

	r.HandleFunc("/Student", handler)
	r.HandleFunc("/Student/{groups}/{course}", handler)
	r.HandleFunc("/Student/{settings}/{course}", handler)
	r.HandleFunc("/Student/{students}/{course}", handler)

	r.HandleFunc("/Admin", handler)
	r.HandleFunc("/Admin/{settings}", handler)
	r.HandleFunc("/Admin/{info}", handler)

	r.PathPrefix("/").Handler(http.FileServer(http.Dir(webroot)))
	http.Handle("/", r)

	http.ListenAndServe(":8000", nil)
}
