package database

type courses struct {
	Courseid   int
	CourseName string
}

// Role references usertype and courses associated with it
type Role struct {
	Mode    string
	Courses []courses
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
		return 0, err
	}
	var courseid int
	err = stmt.QueryRow(courseName).Scan(&courseid)
	if err != nil {
		return 0, err
	}
	return courseid, nil
}

// UpgradeUser upgrades user to either `admin`, `teacher` or `student` based on input string
func UpgradeUser(username string, roles ...Role) error {
	connectDb()
	defer con.Close()

	userid, err := getUserID(username)
	if err != nil {
		return err
	}

	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// Prepare statement in loop
	for _, role := range roles {

		stmt, errp := tx.Prepare("INSERT INTO " + role.Mode + " (userid) VALUES (?)")
		if errp != nil {
			return errp
		}
		defer stmt.Close() // danger!
		// defer to wait for transaction to commit and not fail.
		defer makeUpdate(username, role)

		_, err = stmt.Exec(userid)
		if err != nil {
			return err
		}
	}
	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
}

func makeUpdate(username string, role Role) error {
	connectDb()
	// TODO: Logic for ascending user to admin status
	userid, err := getUserID(username)
	if err != nil {
		return err
	}

	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// Prepare statement in loop
	for _, course := range role.Courses {
		courseid, errid := getCourseID(course.CourseName)
		if errid != nil {
			return errid
		}
		// TODO : prepare transaction
		stmt, errp := tx.Prepare("INSERT INTO " + role.Mode + "_course VALUES (?, ?)")
		if errp != nil {
			return errp
		}
		defer stmt.Close()
		_, err = stmt.Exec(userid, courseid)
		if err != nil {
			return err
		}
	}
	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
}

// GetUserRoles returns Roles
func GetUserRoles(username string) (map[string]Role, error) {
	connectDb()
	defer con.Close()
	//TODO: Return roles of user from database as Roles
	userid, err := getUserID(username)
	if err != nil {
		return nil, err
	}

	roles := make(map[string]Role)
	modes := []string{admin, teacher, student}
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
			return nil, err
		}
		defer stmt.Close()
		rows, err := stmt.Query(userid)
		if err != nil {
			return nil, err
		}
		defer rows.Close()
		for rows.Next() {
			err := rows.Scan(&courseid, &course)
			if err != nil {
				return nil, err
			}
			crses = append(crses, courses{courseid, course})
		}
		role := Role{mode, crses}
		// if rows is empty there is no courses associated with mode, therefore no append
		if len(crses) > 0 {
			roles[mode] = role
		}
		crses = nil
	}
	rls := roles
	// TODO: Combine result to one slice size <= 3
	return rls, nil
}
