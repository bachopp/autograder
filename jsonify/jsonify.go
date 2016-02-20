package jsonify

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
)

// Request struct is the skeleton of the websocket request
type Request struct {
	RequestType      string `json:"requestType"`
	RequestedElement string `json:"requestedElement"`
	FromURL          string `json:"fromURL"`
	RequestedURL     string `json:"requestedURL"`
	Username         string `json:"username"`
	Password         string `json:"password"`
}

// GetFile opens JSON files and returns the format as a struct
func GetFile(filename string) ([]byte, error) {
	if len(filename) <= 0 {
		err := errors.New("getfile: filename too short")
		log.Fatal(err)
	}
	file, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatal(err)
	}
	/*
	  This method only reads and returns the file as []byte.
	  TODO: Impement other methods for multiple files or filetypes
	*/
	return file, err
}

/*
Structify inputs the JSON-file as []byte and an empty struct.
Returns the struct with data.
*/
func Structify(data []byte, request Request) (Request, error) {
	err := json.Unmarshal(data, &request)
	return request, err
}

/*
Unstructify inputs a struct and returns a JSON-format []byte and
an error if an error occur
*/
func Unstructify() ([]byte, error) {
	var value []byte
	var err error
	return value, err
}
