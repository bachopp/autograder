package database

import "log"

// Organization represents db table
type Organization struct {
	id     int    `db:"orgid"`
	name   string `db:"name"`
	url    string `db:"url"`
	course *Course
}

// NewOrganization retrieves organization data from db and returns a struct
func NewOrganization(orgname string) (*Organization, error) {
	connectDb()
	defer con.Close()

	var id int
	var name, url string
	stmt, err := con.Prepare("SELECT * FROM org WHERE name = (?)")
	if err != nil {
		return nil, err
	}

	err = stmt.QueryRow(orgname).Scan(&id, &name, &url)
	if err != nil {
		return nil, err
	}
	o := new(Organization)
	o.id = id
	o.name = name
	o.url = url
	return o, nil
}

// InsertOrganization creates new db row
func InsertOrganization(name string, url string) error {
	connectDb()
	defer con.Close()
	// TODO: SQL insert
	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// prepare statements
	stmt, err := tx.Prepare("INSERT INTO org (name, url) VALUES (?,?)")
	if err != nil {
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(name, url)
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

// OrgID return organization id from db
func OrgID(name string) int {
	var id int
	stmt, err := con.Prepare("SELECT orgid FROM org WHERE name = (?)")
	if err != nil {
		log.Fatal(err)
	}
	err = stmt.QueryRow(name).Scan(&id)
	if err != nil {
		log.Fatal(err)
	}
	return id
}
