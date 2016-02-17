package database

import (
	"fmt"

	"github.com/ziutek/mymysql/mysql"
	_ "github.com/ziutek/mymysql/thrsafe" // or native ?
	// _ "gihutb.com/ziutek/mymysql/native
)

var db mysql.Conn

// DbInit connects to given database name on localhost, creates schema if needed
func DbInit(dbname string) {
	db = connectDb()
	createDatabase(db, dbname)

	fmt.Printf("creating tables\n")

	createUser(db)
	createAdmin(db)
	createTeacher(db)

	fmt.Printf("done initializing database : %s\n", dbname)
}

func connectDb() mysql.Conn {
	fmt.Printf("connecting to db\n")

	user := "autograder"
	password := "autograder"
	db := mysql.New("tcp", "", "127.0.0.1:3306", user, password)
	err := db.Connect()
	if err != nil {
		panic(err)
	}
	return db
}

func createDatabase(db mysql.Conn, dbname string) {
	fmt.Printf("creating database\n")

	_, _, err := db.Query("DROP SCHEMA " + dbname)
	if err != nil {
		panic(err)
	}
	_, _, err = db.Query("CREATE SCHEMA " + dbname)
	if err != nil {
		panic(err)
	}
	_, _, err = db.Query("USE " + dbname)
	if err != nil {
		panic(err)
	}
	fmt.Printf("using database : %-6s \n", dbname)
}

func createUser(db mysql.Conn) {
	sql := "CREATE TABLE user (id int NOT NULL PRIMARY KEY, github VARCHAR(255), last_name VARCHAR(255), first_name VARCHAR(255))"

	_, _, err := db.Query(sql)
	if err != nil {
		fmt.Println(err)
		return
	}
}
func createAdmin(db mysql.Conn) {
	// TODO: implement function

}
func createTeacher(db mysql.Conn) {
	// TODO: implement function

}
func createStudent(db mysql.Conn) {
	// TODO: implement function

}
