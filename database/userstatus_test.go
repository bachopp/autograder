package database

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestUser(t *testing.T) {
	InitializeDb()
	InsertTestUser("thomasUserId1")
	InsertTestUser("thomas")

	AddCourse("DAT300")
	ida := 1
	AddCourse("DAT100")
	idb := 2
	AddCourse("DAT310")
	idc := 3

	a := Role{"student", []courses{{ida, "DAT300"}, {idc, "DAT310"}}}
	b := Role{"teacher", []courses{{idb, "DAT100"}}}
	c := Role{"admin", []courses{{idb, "DAT100"}}}

	UpgradeUser("thomas", a, b, c)

	fmt.Println(json.Marshal(GetUserRoles("thomas")))

}
