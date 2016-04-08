package database

import "testing"

func TestUser(t *testing.T) {
	InitializeDb()
	InsertTestUser("thomasUserId1")
	InsertTestUser("thomas")

	CreateCourse("DAT100")
	ida := 1
	CreateCourse("DAT200")
	idb := 2
	CreateCourse("DAT210")
	idc := 3
	CreateCourse("DAT220")
	ide := 3
	CreateCourse("DAT310")
	idg := 6
	CreateCourse("DAT320")
	idh := 4
	CreateCourse("DAT230")
	idf := 5

	a := Role{"admin", []courses{{idf, "DAT230"}}}
	b := Role{"teacher", []courses{{ida, "DAT100"}, {idb, "DAT200"}, {idc, "DAT210"}, {idg, "DAT310"}}}
	c := Role{"student", []courses{{idh, "DAT320"}, {ide, "DAT220"}}}

	UpgradeUser("thomas", a, b, c)

}
