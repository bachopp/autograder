package database

import "database/sql"

// User represents db table
type User struct {
	id        int
	github    string
	lastName  string
	firstName string
	Teacher
	Student
	Admin
}

// Teacher represents db table
type Teacher struct {
	isTeacher bool
	courses   []*Course
}

// Student represents db table
type Student struct {
	number    int
	isStudent bool
	courses   []*Course
}

// Admin represents db table
type Admin struct {
	isAdmin bool
}

// NewUser returns struct based on db data and argument provided
func NewUser(name string) (*User, error) {
	connectDb()
	defer con.Close()

	var id int
	var github, lastName, firstName string
	// TODO: select user id, then see if he exists in t, a or s tables
	// on each cycle create that tables struct representation and add it to user struct.
	stmt, err := con.Prepare("SELECT * " +
		"FROM user " +
		"WHERE github = (?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	err = stmt.QueryRow(name).Scan(&id, &github, &lastName, &firstName)
	if err != nil {
		return nil, err
	}

	u := new(User)
	u.id = id
	u.github = github
	u.lastName = lastName
	u.firstName = firstName

	u.isTeacher, err = checkMode(u.id, teacher)
	if err != nil {
		return nil, err
	}
	u.isStudent, err = checkMode(u.id, student)
	if err != nil {
		return nil, err
	}
	u.number, err = number(id)
	if err != nil {
		return nil, err
	}
	u.isAdmin, err = checkMode(u.id, admin)
	if err != nil {
		return nil, err
	}
	return u, nil
}

// InsertUser creates database entry with arguments given returns error if failed
func InsertUser(github string, lastName string, firstName string) (*User, error) {
	connectDb()
	defer con.Close()

	tx, err := con.Begin()
	if err != nil {
		return nil, err
	}
	defer tx.Rollback()
	stmt, err := tx.Prepare("INSERT INTO user (github, last_name, first_name) VALUES (?, ?, ?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close() // danger!

	_, err = stmt.Exec(github, lastName, firstName)

	if err != nil {
		return nil, err
	}

	err = tx.Commit()
	if err != nil {
		return nil, err
	}
	u, err := NewUser(github)
	if err != nil {
		return nil, err
	}
	return u, nil
}

func checkMode(id int, mode string) (bool, error) {
	var uid int
	stmt, err := con.Prepare("SELECT user.userid " +
		"FROM user " +
		"INNER JOIN " + mode + " " +
		"ON user.userid = " + mode + ".userid " +
		"WHERE user.userid = (?)")
	if err != nil {
		return false, err
	}
	defer stmt.Close()

	err = stmt.QueryRow(id).Scan(&uid)
	if err != nil {
		if err == sql.ErrNoRows {
			// err = UserError{
			// 	time.Now(),
			// 	fmt.Sprintf("The user has no permission to be added as %v", mode),
			// }
			// there were no rows, but otherwise no error occurred
			return false, nil
		}
		return false, err
	}
	return true, nil
}

func number(id int) (int, error) {
	var studno int
	stmt, err := con.Prepare("SELECT student_number " +
		"FROM student " +
		"WHERE userid = (?)")
	if err != nil {
		return 0, err
	}
	defer stmt.Close()
	err = stmt.QueryRow(id).Scan(&studno)
	if err != nil {
		return 0, nil
	}

	return studno, nil
}

// AddToCourse associates user with course and mode
func (user *User) AddToCourse(course *Course, modes ...string) error {
	connectDb()
	defer con.Close()

	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	for _, mode := range modes {
		// ok, err := checkMode(user.id, mode)
		stmt, err := tx.Prepare("INSERT INTO " + mode + "(userid) " +
			"VALUES (?)")
		if err != nil {
			return err
		}
		defer stmt.Close()
		_, err = stmt.Exec(user.id)
		switch mode {
		case teacher:
			user.isTeacher = true
		case student:
			user.isStudent = true
		}
		stmt2, err := tx.Prepare("INSERT INTO " + mode + "_course " +
			"VALUES (?,?)")
		if err != nil {
			return err
		}
		defer stmt2.Close() // danger!
		_, err = stmt2.Exec(user.id, course.id)
	}
	if err != nil {
		return err
	}
	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
}

// MakeAdmin makes given user an admin for the system
func (user *User) MakeAdmin() error {
	connectDb()
	defer con.Close()

	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()
	stmt, err := tx.Prepare("INSERT INTO admin VALUES (?)")
	if err != nil {
		return err
	}
	defer stmt.Close() // danger!

	_, err = stmt.Exec(user.id)

	if err != nil {
		return err
	}

	err = tx.Commit()
	if err != nil {
		return err
	}
	user.isAdmin = true
	return nil
}
