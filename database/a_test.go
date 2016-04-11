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
	TestBruker(t)
}

func TestDummyData(t *testing.T) {
	InitializeDb()
	// test user
	u1, err := InsertUser("testuser1", "Gliniecki", "Tomasz")
	if err != nil {
		t.Error(err)
	}
	// test organization
	o1, err := InsertOrganization("dat-100", "https://github.com/dat-100")
	if err != nil {
		t.Error(err)
	}
	o2, err := InsertOrganization("dat-200", "https://github.com/dat-100")
	if err != nil {
		t.Error(err)
	}
	// test courses
	name := "DAT100"
	singleAssm := 5
	groupAssm := 2
	description := "Objektorientert programmering"
	slipdays := 5
	isSlipdays := true
	isPrivRepo := false
	isCodeReview := false
	c1, err := InsertCourse(o1, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)

	name = "DAT200"
	singleAssm = 5
	groupAssm = 2
	description = "Web programmering og interaksjons design"
	slipdays = 5
	isSlipdays = true
	isPrivRepo = false
	isCodeReview = false
	c2, err := InsertCourse(o2, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)

	// test inserts
	if err := u1.MakeAdmin(); err != nil {
		t.Error(err)
	}
	if err := u1.AddToCourse(c1, teacher); err != nil {
		t.Error(err)
	}
	if err := u1.AddToCourse(c2, student); err != nil {
		t.Error(err)
	}
}
