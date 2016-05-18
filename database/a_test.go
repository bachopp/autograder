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
	u1, err := InsertUser("tokams", "Gliniecki", "Tomasz")
	if err != nil {
		t.Error(err)
	}
	u2, err := InsertUser("thomas", "Darvik", "Thomas")
	if err != nil {
		t.Error(err)
	}
	u3, err := InsertUser("warrior", "Brød", "Ole")
	if err != nil {
		t.Error(err)
	}
	u4, err := InsertUser("thehundre", "Majones", "Karl")
	if err != nil {
		t.Error(err)
	}
	u5, err := InsertUser("witch", "Woj", "Anna")
	if err != nil {
		t.Error(err)
	}
	u6, err := InsertUser("kartofel", "Eplejucen", "Denna")
	if err != nil {
		t.Error(err)
	}
	u7, err := InsertUser("windows", "Ajajaj", "Caroline")
	if err != nil {
		t.Error(err)
	}
	u8, err := InsertUser("macintosh", "Mustard", "Rick")
	if err != nil {
		t.Error(err)
	}
	u9, err := InsertUser("chleb", "Steam", "Andreas")
	if err != nil {
		t.Error(err)
	}
	u10, err := InsertUser("brakuje", "Wody", "Wmies")
	if err != nil {
		t.Error(err)
	}
	u11, err := InsertUser("zadowolt", "Zadowolony", "Tomek")
	if err != nil {
		t.Error(err)
	}
	u12, err := InsertUser("koniec", "Bramka", "Augustino")
	if err != nil {
		t.Error(err)
	}
	u13, err := InsertUser("ojolu", "Ojoys", "Lukas")
	if err != nil {
		t.Error(err)
	}
	u14, err := InsertUser("bosto", "Bord", "Stol")
	if err != nil {
		t.Error(err)
	}
	u15, err := InsertUser("deadpool", "Pool", "Dead")
	if err != nil {
		t.Error(err)
	}
	// test organization
	o1, err := InsertOrganization("dat-100", "https://github.com/dat-100")
	if err != nil {
		t.Error(err)
	}
	o2, err := InsertOrganization("dat-200", "https://github.com/dat-200")
	if err != nil {
		t.Error(err)
	}
	o3, err := InsertOrganization("dat-310", "https://github.com/dat-310")
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
	if err != nil {
		t.Error(err)
	}
	name = "DAT200"
	singleAssm = 5
	groupAssm = 2
	description = "Web programmering og interaksjons design"
	slipdays = 5
	isSlipdays = true
	isPrivRepo = false
	isCodeReview = false
	c2, err := InsertCourse(o2, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)
	if err != nil {
		t.Error(err)
	}
	name = "DAT310"
	singleAssm = 5
	groupAssm = 2
	description = "Databaser"
	slipdays = 5
	isSlipdays = true
	isPrivRepo = false
	isCodeReview = false
	c3, err := InsertCourse(o3, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)
	if err != nil {
		t.Error(err)
	}
	name = "DAT320"
	singleAssm = 5
	groupAssm = 2
	description = "Testdescriptin of the course how long will it display on in the application, it should not break anything"
	slipdays = 0
	isSlipdays = false
	isPrivRepo = false
	isCodeReview = false
	c4, err := InsertCourse(o3, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)
	if err != nil {
		t.Error(err)
	}
	// test inserts
	if err := u1.MakeAdmin(); err != nil {
		t.Error(err)
	}
	if err := u1.MakeStudent(22222); err != nil {
		t.Error(err)
	}
	if err := u1.AddToCourse(c1, teacher); err != nil {
		t.Error(err)
	}
	if err := u1.AddToCourse(c2, teacher); err != nil {
		t.Error(err)
	}
	if err := u1.AddToCourse(c3, student); err != nil {
		t.Error(err)
	}
	if err := u1.AddToCourse(c4, student); err != nil {
		t.Error(err)
	}

	if err := u2.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u3.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u4.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u5.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u6.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u7.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u8.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u9.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u10.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u11.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u12.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u13.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u14.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
	if err := u15.AddToCourse(c1, student); err != nil {
		t.Error(err)
	}
}
