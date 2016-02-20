package database

import (
	"database/sql"
	"log"
)

// TODO: this will serve as communication between client and database

// InsertToData inserts query into database
func InsertToData() {
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
	return 1, nil
}

// UpgradeUser upgrades user to either `admin`, `teacher` or `student` based on input string
func UpgradeUser(username string, courses []string, upgrades ...string) {
	userid, err := getUserID(username)

	tx, err := con.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer tx.Rollback()
	for _, upgrade := range upgrades {

		if upgrade == "student" {
			for _, course := range courses {
				makeStudent(username, course)
			}
		}

		stmt, err := tx.Prepare("INSERT INTO " + upgrade + " (userid) VALUES (?)")
		if err != nil {
			log.Fatal(err)
		}
		defer stmt.Close() // danger!
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

func makeAdmin(username string) {
	// TODO: Logic for ascending user to admin status
}

func makeTeacher(username string, course string) {
	// TODO: Logic for upgrading to teacher status
}

func makeStudent(username string, course string) {
	// TODO: Logic for making student status
	tx, err := con.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer tx.Rollback()

	// TODO: Prepare statement for adding `student_number` to database with `course`
	stmt, err := tx.Prepare("? ?")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()
	_, err = stmt.Exec(username, course)
	if err != nil {
		log.Fatal(err)
	}
	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
}
