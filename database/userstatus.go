package database

import (
	"database/sql"
	"fmt"
	"log"
)

// Roles type is created when upgrading a user
// function UpgradeUser will use this to update user with access rights to Courses
type Roles struct {
	Mode    string
	Courses []string
}

var con sql.DB

// ConnectDb connects to database
func ConnectDb() {
	db, err := sql.Open("mymysql",
		"agdatabase/autograder/autograder")
	if err != nil {
		log.Fatal(err)
	}
	con = *db
	defer db.Close()
}

// InsertTestUser inserts test user
func InsertTestUser(github string) {
	tx, err := con.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer tx.Rollback()
	stmt, err := tx.Prepare("INSERT INTO user (github, last_name, first_name) VALUES (?, ?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close() // danger!
	lastName := "TestLast"
	firstName := "TersFirst"
	_, err = stmt.Exec(github, lastName, firstName)
	if err != nil {
		log.Fatal(err)
	}

	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
	// stmt.Close() runs here!
}

func getUserID(username string) (int, error) {
	// TODO: username is candidate key, find primary key of `username`
	stmt, err := con.Prepare("SELECT userid FROM user WHERE github = ?")
	if err != nil {
		return 0, err
	}
	var userid int
	err = stmt.QueryRow(username).Scan(&userid)
	if err != nil {
		return 0, err
	}
	return userid, nil
}
func getCourseID(courseName string) (int, error) {
	// TODO: use courseName as candidate key to return `courseid` from database
	stmt, err := con.Prepare("SELECT courseid FROM course WHERE course_name = ?")
	if err != nil {
		log.Fatal(err)
	}
	var courseid int
	err = stmt.QueryRow(courseName).Scan(&courseid)
	if err != nil {
		return 0, err
	}
	return courseid, nil
}

// UpgradeUser upgrades user to either `admin`, `teacher` or `student` based on input string
func UpgradeUser(username string, roles ...Roles) {
	userid, err := getUserID(username)

	tx, err := con.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer tx.Rollback()

	// Prepare statement in loop
	for _, role := range roles {

		stmt, err := tx.Prepare("INSERT INTO " + role.Mode + " (userid) VALUES (?)")
		if err != nil {
			log.Fatal(err)
		}
		defer stmt.Close() // danger!
		makeUpdate(username, role)

		_, err = stmt.Exec(userid)
		if err != nil {
			log.Fatal(err)
		}
	}
	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
}

func makeUpdate(username string, role Roles) {
	// TODO: Logic for ascending user to admin status
	userid, err := getUserID(username)
	if err != nil {
		log.Fatal(err)
	}

	tx, err := con.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer tx.Rollback()

	// Prepare statement in loop
	for _, course := range role.Courses {
		courseid, err := getCourseID(course)
		// TODO : prepare transaction
		stmt, err := tx.Prepare("INSERT INTO " + role.Mode + "_course VALUES (?, ?)")
		if err != nil {
			log.Fatal(err)
		}
		defer stmt.Close()
		_, err = stmt.Exec(userid, courseid)

		fmt.Printf("%s %s : %s \n", role.Mode, username, course)
	}

	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}

}
