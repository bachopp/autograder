package jsonify

import (
	"errors"
	"io/ioutil"
	"log"
)

// GetFile opens JSON files and returns the format as a struct
func GetFile(filename string) []byte {
	if len(filename) <= 0 {
		err := errors.New("getfile: filename too short")
		log.Fatal(err)
	}
	file, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatal(err)
		return file
	}

	/*
	  This method only reads and returns the file as []byte.
	  TODO: Impement other methods for multiple files or filetypes
	*/
	return file
}

// Structify inputs the JSON-file as []byte and returns a struct
func Structify(data []byte) {

	return Request
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
