package database

import "testing"

func TestCourse(t *testing.T) {
	name := "DAT310"
	singleAssm := 5
	groupAssm := 2
	description := "Operativsystemer"
	slipdays := 5
	isSlipdays := true
	isPrivRepo := false
	isCodeReview := false
	orgName := "uis-dat320"
	err := InsertCourse(orgName, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)
	if err != nil {
		t.Error(err)
	}

	c, err := NewCourse(name)
	if err != nil {
		t.Error(err)
	}
	if c.org.name != orgName {
		t.Errorf("Expected %v, got %v", orgName, c.org.name)
	}
}
