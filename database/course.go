package database

import "log"

// Course  represents db table
type Course struct {
	id   string
	name string
	assm []*Assignment
	*Organization
}

// NewCourse creates new struct via db
func NewCourse(name string, single int, group int, github string, priv bool, review bool, desc string, slip bool, nslip int) *Course {
	// TODO: SQL insert into
	return new(Course)
}

// TODO: when organization is choosen, github API creates repos/folders for each new Course
func createCourse(name string) {
	connectDb()
	defer con.Close()

	stmt, err := con.Prepare("INSERT INTO course (course_name) VALUES (?)")
	if err != nil {
		log.Fatal(err)
	}
	_, err = stmt.Exec(name)
	if err != nil {
		log.Fatal(err)
	}
}

func updateCourse(courseid int) {

}

func addAssignment() {

}

func removeAssignment(id int) {

}
