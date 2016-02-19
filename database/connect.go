package database

import (
	"bufio"
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/ziutek/mymysql/godrv" // driver mysql
)

// using sql.DB globally ? http://goo.gl/n73TeQ

// InitializeDb creates all neccesary tables for autograder
func InitializeDb() {
	db, err := sql.Open("mymysql",
		"agdatabase/autograder/autograder")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	f, err := os.Open("/home/tomgli/workspace/go/src/github.com/bachopp/autograder/database/database.sql")
	if err != nil {
		log.Fatal(err)
	}

	scanner := bufio.NewScanner(f)

	for scanner.Scan() {
		line := scanner.Text()
		_, err := db.Exec(line)
		if err != nil {
			log.Fatal(err)
		}
	}
}

func createDatabase(db *sql.DB, dbname string) {

	_, err := db.Exec("DROP SCHEMA IF EXISTS " + dbname)
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Exec("CREATE SCHEMA " + dbname)
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Exec("USE " + dbname)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("using database : %-6s \n", dbname)
}

func createUser(db *sql.DB, sql string) {
	// sql := "CREATE TABLE user (userid int NOT NULL PRIMARY KEY, github VARCHAR(255), last_name VARCHAR(255), first_name VARCHAR(255))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createAdmin(db *sql.DB) {
	sql := "CREATE TABLE admin (userid INT NOT NULL PRIMARY KEY)"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func crateTeacher(db *sql.DB) {
	sql := "CREATE TABLE teacher (userid INT NOT NULL PRIMARY KEY)"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createStudent(db *sql.DB) {
	sql := "CREATE TABLE student (userid INT NOT NULL PRIMARY KEY)"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createCourse(db *sql.DB) {
	sql := "CREATE TABLE course (courseid INT NOT NULL PRIMARY KEY, course_name VARCHAR(255) NOT NULL)"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createAdminCourse(db *sql.DB) {
	sql := "CREATE TABLE admin_course (adminid INT NOT NULL, courseid INT NOT NULL, CONSTRAINT admin_fk FOREIGN KEY (adminid) REFERENCES admin(userid),CONSTRAINT course_fk FOREIGN KEY (courseid) REFERENCES course(courseid), PRIMARY KEY (adminid, courseid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createTeacherCourse(db *sql.DB) {
	sql := "CREATE TABLE teacher_course (teacherid INT NOT NULL, courseid INT NOT NULL, CONSTRAINT teacher_fk FOREIGN KEY (teacherid) REFERENCES teacher(userid), CONSTRAINT tcourse_fk FOREIGN KEY (courseid) REFERENCES course(courseid), PRIMARY KEY (teacherid, courseid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createStudentCourse(db *sql.DB) {
	sql := "CREATE TABLE student_course (studentid INT NOT NULL, cousreid INT NOT NULL, CONSTRAINT student_fk FOREIGN KEY (studentid) REFERENCES student(userid),CONSTRAINT course_fk FOREIGN KEY (courseid) REFERENCES course(courseid), PRIMARY KEY (studentid, courseid))"
	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createGroup(db *sql.DB) {
	sql := "CREATE TABLE group (groupid INT NOT NULL PRIMARY KEY)"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createStudentGroup(db *sql.DB) {
	sql := "CREATE TABLE student_group (sutendid INT NOT NULL, groupid INT NOT NULL, CONSTRAINT student_fk FOREIGN KEY (studentid) REFERENCES student(userid), CONSTRAINT group_fkFOREIGN KEY (groupid) REFERENCES group(groupid), PRIMARY KEY (studentid, groupid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createAsmt(db *sql.DB) {
	sql := "CREATE TABLE asmt (asmtid INT NOT NULL PRIMARY KEY, number INT NOT NULL, course_name VARCHAR(255) NOT NULL, courseid INT NOT NULL, FOREIGN KEY courseid REFERENCES course(courseid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createStudentAsmt(db *sql.DB) {
	sql := "CREATE TABLE student_asmt (studentid INT NOT NULL, asmtid INT NOT NULL, FOREIGN KEY studentid REFERENCES student(studentid), FOREIGN KEY asmtid REFERENCES asmt(asmtid), PRIMARY KEY (studentid, asmtid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createGroupAsmt(db *sql.DB) {
	sql := "CREATE TABLE group_asmt (groupid INT NOT NULL, asmtid INT NOT NULL, FOREIGN KEY groupid REFERENCES group(groupid), FOREIGN KEY asmtid REFERENCES asmt(asmtid), PRIMARY KEY (groupid, asmtid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createOrg(db *sql.DB) {
	sql := "CREATE TABLE org (orgid INT NOT NULL PRIMARY KEY, url VARCHAR(255) NOT NULL)"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createCourseOrg(db *sql.DB) {
	sql := "CREATE TABLE course_organization (courseid INT NOT NULL, orgid INT NOT NULL, FOREIGN KEY courseid REFERENCES course(courseid), FOREIGN KEY orgid REFERENCES organization(orgid), PRIMARY KEY (courseid, orgid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createRepo(db *sql.DB) {
	sql := "CREATE TABLE repository (repoid INT NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, group_name VARCHAR(255) NOT NULL, groupid INT NOT NULL, FOREIGN KEY groupid REFERENCES group(groupid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createOrgRepo(db *sql.DB) {
	sql := "CREATE TABLE org_repo (orgid INT NOT NULL, repoid INT NOT NULL, FOREIGN KEY orgid REFERENCES org(orgid), FOREIGN KEY repoid REFERENCES repo(repoid), PRIMARY KEY (orgid, repoid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}

func createStudentRepo(db *sql.DB) {
	sql := "CREATE TABLE student_repo (studentid INT NOT NULL, repoid INT NOT NULL, FOREIGN KEY studentid REFERENCES student(studentid), FOREIGN KEY repoid REFERENCES repo(repoid))"

	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}
