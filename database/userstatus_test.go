package database

import (
	"fmt"
	"testing"
)

func TestUser(t *testing.T) {
	InitializeDb()

	InsertTestUser("tokamsUserId1")
	InsertTestUser("tokams")

	AddCourse("DAT300")
	AddCourse("DAT100")
	AddCourse("DAT310")

	a := Roles{"student", []string{"DAT300", "DAT310"}}
	b := Roles{"teacher", []string{"DAT100"}}
	c := Roles{"admin", []string{"DAT300"}}

	UpgradeUser("tokams", a, b, c)
	roles := GetUserRoles("tokams")

	for _, role := range roles {
		fmt.Printf("%s : %s\n", role.Mode, role.Courses)
	}

}
