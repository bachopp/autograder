package database

import "log"

// AddCourse adds simple course to db with `courseName course_name`
func AddCourse(courseName string) {
	connectDb()
	defer con.Close()

	stmt, err := con.Prepare("INSERT INTO course (course_name) VALUES (?)")
	if err != nil {
		log.Fatal(err)
	}
	_, err = stmt.Exec(courseName)
	if err != nil {
		log.Fatal(err)
	}
}
