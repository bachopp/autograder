package database

// User represents db table
type User struct {
	id        int
	github    string
	lastName  string
	firstName string
	*Teacher
	*Student
	*Admin
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
	// var *Teacher
	// var *Student
	// var *Admin
	stmt, err := con.Prepare("")
	if err != nil {
		return nil, err
	}
	err = stmt.QueryRow(name).Scan(&id, &github, &lastName, &firstName)
	if err != nil {
		return nil, err
	}

	u := new(User)

	return u, nil
}

// InsertUser creates database entry with arguments given returns error if failed
func InsertUser(github string, lastName string, firstName string) error {
	connectDb()
	defer con.Close()

	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()
	stmt, err := tx.Prepare("INSERT INTO user (github, last_name, first_name) VALUES (?, ?, ?)")
	if err != nil {
		return err
	}
	defer stmt.Close() // danger!

	// test data:
	_, err = stmt.Exec(github, lastName, firstName)

	if err != nil {
		return err
	}

	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
	// stmt.Close() runs here!
}
