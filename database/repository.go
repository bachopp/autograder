package database

import "log"

// Repository  represents db table
type Repository struct {
	name string
	url  string
}

// NewRepository creates new struct via db
func NewRepository(name string, url string) *Repository {
	r := new(Repository)
	r.name = name
	r.url = url
	r.insertToDB()
	return r
}

func (repo Repository) insertToDB() {
	// TODO: SQL statements
	tx, err := con.Begin()
	if err != nil {
		log.Fatal(err)
	}
	defer tx.Rollback()

	// prepare transaction
	stmt, err := tx.Prepare("INSERT INTO repo VALUES (?, ?)")
	if err != nil {
		log.Fatal(err)
	}
	defer stmt.Close()

	_, err = stmt.Exec(repo.name, repo.url)

	if err != nil {
		log.Fatal(err)
	}

	// commit transaction
	err = tx.Commit()
	if err != nil {
		log.Fatal(err)
	}
}

func repoID() int {
	return 1
}

func toStruct() *Repository {
	var name, repurl string
	// TODO: SQL for retrieval of repodata
	stmt, err := con.Prepare("SELECT * FROM repo WHERE repoid = (?)")
	if err != nil {
		log.Fatal(err)
	}
	rows, err := stmt.Query(repoID())
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()
	for rows.Next() {
		err := rows.Scan(&name, &repurl)
		if err != nil {
			log.Fatal(err)
		}
	}
	return new(Repository)
}
