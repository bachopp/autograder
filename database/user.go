package database

import "database/sql"

// User represents db table
type User struct {
	ID        int
	Github    string
	LastName  string
	FirstName string
	Teacher   `json:"Teacher"`
	Student   `json:"Student"`
	Admin     `json:"Admin"`
}

// Teacher represents db table
type Teacher struct {
	isTeacher bool
	Courses   *[]Course `json:"Courses"`
}

// Student represents db table
type Student struct {
	number    int
	isStudent bool
	Courses   *[]Course `json:"Courses"`
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
	var Github, LastName, FirstName string
	// TODO: select user.ID, then see if he exists in t, a or s tables
	// on each cycle create that tables struct representation and add it to user struct.
	stmt, err := con.Prepare("SELECT * " +
		"FROM user " +
		"WHERE github = (?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	err = stmt.QueryRow(name).Scan(&id, &Github, &LastName, &FirstName)
	if err != nil {
		return nil, err
	}

	u := new(User)
	u.ID = id
	u.Github = Github
	u.LastName = LastName
	u.FirstName = FirstName

	u.isTeacher, err = checkMode(u.ID, teacher)
	if err != nil {
		return nil, err
	}
	if u.isTeacher {
		u.Teacher.Courses, err = checkCourses(u.ID, teacher)
		if err != nil {
			return nil, err
		}
	}
	u.isStudent, err = checkMode(u.ID, student)
	if err != nil {
		return nil, err
	}
	if u.isStudent {
		u.number, err = number(id)
		if err != nil {
			return nil, err
		}
		u.Student.Courses, err = checkCourses(u.ID, student)
		if err != nil {
			return nil, err
		}
	}
	u.isAdmin, err = checkMode(u.ID, admin)
	if err != nil {
		return nil, err
	}
	return u, nil
}

// InsertUser creates database entry with arguments given returns error if failed
func InsertUser(Github string, LastName string, FirstName string) (*User, error) {
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

	_, err = stmt.Exec(Github, LastName, FirstName)

	if err != nil {
		return nil, err
	}

	err = tx.Commit()
	if err != nil {
		return nil, err
	}
	u, err := NewUser(Github)
	if err != nil {
		return nil, err
	}
	return u, nil
}

func checkCourses(id int, mode string) (*[]Course, error) {
	stmt, err := con.Prepare("SELECT course.courseid, course_name, description FROM " +
		mode + "_course " +
		"INNER JOIN " + mode + " " +
		"ON " + mode + ".userid = " + mode + "_course.userid " +
		"INNER JOIN course " +
		"ON course.courseid = " + mode + "_course.courseid " +
		"WHERE " + mode + ".userid = (?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()
	rows, err := stmt.Query(id)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var cid int
	var name, description string
	var courses []Course
	for rows.Next() {
		err := rows.Scan(&cid, &name, &description)
		if err != nil {
			return nil, err
		}
		courses = append(courses, Course{ID: cid, Name: name, Description: description})
	}
	return &courses, nil
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

// Helper method for AddToCourse, that updates user object
func (user *User) updateCourse() error {
	connectDb()
	defer con.Close()
	var err error

	if user.isTeacher {
		user.Teacher.Courses, err = checkCourses(user.ID, teacher)
	}
	if user.isStudent {
		user.Student.Courses, err = checkCourses(user.ID, student)
	}
	return err
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
		// ok, err := checkMode(user.ID, mode)
		stmt, err := tx.Prepare("INSERT INTO " + mode + " (userid) " +
			"VALUES (?)")
		if err != nil {
			return err
		}
		defer stmt.Close()
		_, err = stmt.Exec(user.ID)
		switch mode {
		case teacher:
			user.isTeacher = true
		case student:
			user.isStudent = true
		}
		if err != nil {
			return err
		}
		stmt2, err := tx.Prepare("INSERT INTO " + mode + "_course " +
			"VALUES (?,?)")
		if err != nil {
			return err
		}
		defer stmt2.Close() // danger!
		_, err = stmt2.Exec(user.ID, course.ID)
	}
	if err != nil {
		return err
	}
	err = tx.Commit()
	if err != nil {
		return err
	}
	err = user.updateCourse()
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

	_, err = stmt.Exec(user.ID)

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
