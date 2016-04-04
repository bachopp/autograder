package database

import "log"

type courses struct {
	Courseid   int
	CourseName string
}

// Role references usertype and courses associated with it
type Role struct {
	Mode    string
	Courses []courses
}

// Roles wraps all the roles to send as json through websocket
type Roles struct {
	Roles []Role `json:"roles"`
}

// InsertTestUser inserts test user
func InsertTestUser(github string) {
	connectDb()
	defer con.Close()

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

	// test data:
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
func UpgradeUser(username string, roles ...Role) {
	connectDb()
	defer con.Close()

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
		// defer to wait for transaction to commit and not fail.
		defer makeUpdate(username, role)

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

func makeUpdate(username string, role Role) {
	connectDb()
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
		courseid, err := getCourseID(course.CourseName)
		// TODO : prepare transaction
		stmt, err := tx.Prepare("INSERT INTO " + role.Mode + "_course VALUES (?, ?)")
		if err != nil {
			log.Fatal(err)
		}
		defer stmt.Close()
		_, err = stmt.Exec(userid, courseid)
		if err != nil {
			log.Fatal(err)
		}
	}
	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
}

// GetUserRoles returns Roles
func GetUserRoles(username string) Roles {
	connectDb()
	defer con.Close()
	//TODO: Return roles of user from database as Roles
	userid, err := getUserID(username)
	if err != nil {
		log.Fatal(err)
	}

	roles := make([]Role, 0, 3)
	modes := []string{"admin", "teacher", "student"}
	crses := make([]courses, 0, 32)
	var course string
	var courseid int
	for _, mode := range modes {
		//TODO: collect courses in each mode
		stmt, err := con.Prepare(
			"SELECT course.courseid, course_name " +
				"FROM " + mode + "_course " +
				"INNER JOIN " + mode + " " +
				"ON " + mode + ".userid = " + mode + "_course.userid " +
				"INNER JOIN course " +
				"ON course.courseid = " + mode + "_course.courseid " +
				"WHERE " + mode + ".userid = (?)")
		if err != nil {
			log.Fatal(err)
		}
		defer stmt.Close()
		rows, err := stmt.Query(userid)
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()
		for rows.Next() {
			err := rows.Scan(&courseid, &course)
			if err != nil {
				log.Fatal(err)
			}
			crses = append(crses, courses{courseid, course})
		}
		role := Role{mode, crses}
		// if rows is empty there is no courses associated with mode, therefore no append
		if len(crses) > 0 {
			roles = append(roles, role)
		}
		crses = nil
	}
	rls := Roles{roles}
	// TODO: Combine result to one slice size <= 3
	return rls
}
