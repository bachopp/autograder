package database

import (
	"bufio"
	"database/sql"
	"log"
	"os"

	_ "github.com/ziutek/mymysql/godrv" // driver mysql
)

var con sql.DB

func connectDb() {
	// database name in sql.Open is required, as a result one needs to create a database before starting the server.
	// name of the database should be "agdatabase"
	db, err := sql.Open("mymysql",
		"agdatabase/autograder/autograder")
	if err != nil {
		log.Fatal(err)
	}
	con = *db
	// !!! IMPORTANT
	// [defer] con.Close() needs to be called after every connectDb() call
	// !!! IMPORTANT
}

// InitializeDb creates all neccesary tables for autograder
func InitializeDb() error {
	connectDb()
	defer con.Close()

	f, err := os.Open("/var/www/autograder/database/database.sql")
	if err != nil {
		return err
	}

	scanner := bufio.NewScanner(f)

	for scanner.Scan() {
		line := scanner.Text()
		_, err := con.Exec(line)
		if err != nil {
			return err
		}
	}
	return nil
}
