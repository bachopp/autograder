package database

import "log"

// Course  represents db table
type Course struct {
	ID           int    `db:"courseid"`
	Name         string `db:"course_name"`
	SingleAssm   int    `db:"single_assignments"`
	GroupAssm    int    `db:"groups_assignments"`
	Description  string `db:"description"`
	Slipdays     int    `db:"number_of_slipdays"`
	IsSlipdays   bool   `db:"is_slipdays"`
	IsPrivRepo   bool   `db:"is_private_repositories"`
	IsCodeReview bool   `db:"is_code_review"`
	Assignments  []*Assignment
	Org          *Organization
	Teachers     []*Teacher
	Students     []*Student
}

// NewCourse returns struct based on db data
func NewCourse(courseName string) (*Course, error) {
	connectDb()
	defer con.Close()

	var id, singleAssm, groupAssm, slipdays int
	var name, description string
	var isSlipdays, isPrivRepo, isCodeReview bool
	// var assignments []*Assignment
	var orgname string
	// var teachers []*Teacher
	// var students []*Student

	stmt, err := con.Prepare("SELECT " +
		"course.courseid, course_name,single_assignments, " +
		"groups_assignments, description, " +
		"number_of_slipdays, is_slipdays, " +
		"is_private_repositories, is_code_review, org.name " +
		"FROM course_organization " +
		"INNER JOIN course " +
		"ON course.courseid = course_organization.courseid " +
		"INNER JOIN org " +
		"ON org.orgid = course_organization.orgid " +
		" WHERE course_name = (?)")
	if err != nil {
		return nil, err
	}
	err = stmt.QueryRow(courseName).Scan(&id, &name, &singleAssm, &groupAssm, &description, &slipdays, &isSlipdays, &isPrivRepo, &isCodeReview, &orgname)
	if err != nil {
		return nil, err
	}
	o, err := NewOrganization(orgname)
	if err != nil {
		return nil, err
	}

	c := new(Course)
	c.ID = id
	c.Name = name
	c.SingleAssm = singleAssm
	c.GroupAssm = groupAssm
	c.Description = description
	c.Slipdays = slipdays
	c.IsSlipdays = isSlipdays
	c.IsPrivRepo = isPrivRepo
	c.IsCodeReview = isCodeReview
	c.Org = o

	return c, nil
}

// InsertCourse creates new struct via db
func InsertCourse(org *Organization, name string, singleAssm int, groupAssm int, description string, slipdays int, isSlipDay bool, isPrivRepo bool, isCoreReview bool) (*Course, error) {
	// TODO: SQL insert into
	connectDb()
	defer con.Close()

	tx, err := con.Begin()
	if err != nil {
		return nil, err
	}
	defer tx.Rollback()

	// prepare statements
	stmt, err := tx.Prepare("INSERT INTO course " +
		"(course_name, single_assignments, groups_assignments, " +
		"description, number_of_slipdays, is_slipdays, " +
		"is_private_repositories, is_code_review) " +
		" VALUES (?,?,?,?,?,?,?,?)")
	if err != nil {
		return nil, err
	}
	defer stmt.Close()

	_, err = stmt.Exec(name, singleAssm, groupAssm, description, slipdays, isSlipDay, isPrivRepo, isCoreReview)
	if err != nil {
		return nil, err
	}
	// commit transaction
	err = tx.Commit()
	if err != nil {
		return nil, err
	}

	// TODO: this should be done by getting the ID directly from the client,
	// to enable courses with same names and archiving of old courses
	err = joinOrganization(name, org.name)
	if err != nil {
		return nil, err
	}
	c, err := NewCourse(name)
	if err != nil {
		return nil, err
	}

	return c, nil
}

func joinOrganization(course string, org string) error {
	connectDb()
	defer con.Close()

	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	stmt, err := tx.Prepare("INSERT INTO course_organization VALUES (?,?)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	// TODO: get the ID, but later they will be provided directly
	// by function arguments
	cid := CourseID(course)
	oid := OrgID(org)
	_, err = stmt.Exec(cid, oid)
	if err != nil {
		return err
	}
	// commit transaction
	err = tx.Commit()
	if err != nil {
		return err
	}
	return nil
}

// CourseID returns course id from db
func CourseID(name string) int {
	var id int
	stmt, err := con.Prepare("SELECT courseid FROM course WHERE course_name = (?)")
	if err != nil {
		log.Fatal(err)
	}
	err = stmt.QueryRow(name).Scan(&id)
	if err != nil {
		log.Fatal(err)
	}
	return id
}

func createCourse(name string) {
	// TODO: when organization is choosen, github API creates repos/folders for each new Course
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
