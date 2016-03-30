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
	// ide := 4
	// AddCourse("DAT230")
	// idf := 5
	// AddCourse("DAT310")
	// idg := 6
	AddCourse("DAT320")
	idh := 7

	a := Role{"admin", []courses{{ida, "DAT100"}, {idb, "DAT200"}, {idc, "DAT210"}}}
	b := Role{"teacher", []courses{{ida, "DAT100"}, {idb, "DAT200"}}}
	c := Role{"student", []courses{{idh, "DAT320"}}}

	UpgradeUser("thomas", a, b, c)

}
