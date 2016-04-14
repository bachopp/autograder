package database

import "testing"

func TestUserStat(t *testing.T) {
	InitializeDb()

	InsertUser("tokams", "Gliniecki", "Tomasz")
	InsertUser("thomasdarvik", "Darvik", "Thomas")

	createCourse("DAT100")
	ida := 1
	createCourse("DAT200")
	idb := 2
	createCourse("DAT210")
	idc := 3
	createCourse("DAT220")
	ide := 3
	createCourse("DAT310")
	idg := 6
	createCourse("DAT320")
	idh := 4
	createCourse("DAT230")
	idf := 5

	a := Role{"admin", []courses{{idf, "DAT230"}}}
	b := Role{"teacher", []courses{{ida, "DAT100"}, {idb, "DAT200"}, {idc, "DAT210"}, {idg, "DAT310"}}}
	c := Role{"student", []courses{{idh, "DAT320"}, {ide, "DAT220"}}}

	UpgradeUser("tokams", a, b, c)
	UpgradeUser("thomasdarvik", b, c)

}
