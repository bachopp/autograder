package jsonify

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
)

// Request struct is the skeleton of the websocket request
type Request struct {
	Name     string      `json:"name"`
	Data     interface{} `json:"data"`
	Username string      `json:"username"`
}

// Response struct is the skeleton of the websocket response
type Response struct {
	JSON []byte `json:"json"`
}

// GetJSONFile opens JSON files and returns the format as a struct
func GetJSONFile(filename string) ([]byte, error) {
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
func Structify(data []byte, str interface{}) error {
	return json.Unmarshal(data, str)
}

/*
Unstructify inputs a struct and returns a JSON-format []byte and
an error if an error occur
*/
func Unstructify(str interface{}) ([]byte, error) {
	return json.Marshal(str)
}
