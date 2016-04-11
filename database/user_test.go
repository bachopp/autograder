package database

import (
	"fmt"
	"testing"
)

func TestBruker(t *testing.T) {
	u1n := "tokams"
	u2n := "thomasdarvik"

	u1, err := InsertUser(u1n, "Gliniecki", "Tomasz")
	if err != nil {
		t.Error(err)
	}

	u2, err := InsertUser(u2n, "Darvik", "Thomas")
	if err != nil {
		t.Error(err)
	}

	c, err := NewCourse("DAT310")
	if err != nil {
		t.Error(err)
	}
	if err = u1.AddToCourse(c, teacher, student); err != nil {
		t.Error(err)
	}

	u1.MakeAdmin()
	fmt.Println(u1.isAdmin)
	fmt.Println(u1.isTeacher)
	fmt.Println(u1.isStudent)

	if u1.github != u1n && u2.github != u2n {
		t.Errorf("Expected %s : %s but got %s : %s", u1n, u2n, u1.github, u2.github)
	}
}
