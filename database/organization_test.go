package database

import (
	"log"
	"testing"
)

func TestOrganization(t *testing.T) {

	inname := "uis-dat320"
	inurl := "https://github.com/uis-dat320/"

	o, err := InsertOrganization(inname, inurl)
	if err != nil {
		log.Fatal(err)
	}

	if o.name != inname && o.url != inurl {
		t.Errorf("Exepected %s : %s but got %s : %s", inname, inurl, o.name, o.url)
	}
}
