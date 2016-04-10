package database

import "testing"

func TestInitializeDb(t *testing.T) {
	err := InitializeDb()
	if err != nil {
		t.Error(err)
	}
	// correct order
	TestOrganization(t)
	TestCourse(t)
	TestUser(t)
}
