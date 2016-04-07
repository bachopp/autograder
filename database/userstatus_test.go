package database

import "testing"

func TestUser(t *testing.T) {
	InitializeDb()
	InsertTestUser("thomasUserId1")
	InsertTestUser("thomas")

	AddCourse("DAT100")
	ida := 1
	AddCourse("DAT200")
	idb := 2
	AddCourse("DAT210")
	idc := 3
	AddCourse("DAT220")
	ide := 3
	AddCourse("DAT310")
	idg := 6
	AddCourse("DAT320")
	idh := 4
	AddCourse("DAT230")
	idf := 5

	a := Role{"admin", []courses{{idf, "DAT230"}}}
	b := Role{"teacher", []courses{{ida, "DAT100"}, {idb, "DAT200"}, {idc, "DAT210"}, {idg, "DAT310"}}}
	c := Role{"student", []courses{{idh, "DAT320"}, {ide, "DAT220"}}}

	UpgradeUser("thomas", a, b, c)

}
