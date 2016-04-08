package database

import "log"

// Organization represents db table
type Organization struct {
	id   string
	name string
	url  string
}

// NewOrganization creates new struct via db
func NewOrganization(name string, url string) *Organization {
	err := orgInsert(name, url)
	if err != nil {
		log.Fatal(err)
	}
	org, err := orgRetrieve(name)
	return org
}

func orgInsert(name string, url string) error {
	// TODO: SQL insert
	tx, err := con.Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// prepare statements
	stmt, err := tx.Prepare("INSERT INTO org VALUES (?,?)")
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
	return err
}

func orgRetrieve(orgname string) (*Organization, error) {
	var id, name, url string
	stmt, err := con.Prepare("SELECT * FROM org WHERE name = (?)")
	if err != nil {
		return nil, err
	}
	err = stmt.QueryRow(orgname).Scan(&id, &name, &url)
	if err != nil {
		return nil, err
	}
	return new(Organization), nil
}
