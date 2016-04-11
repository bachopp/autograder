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
	org, err := NewOrganization(orgName)
	if err != nil {
		t.Error(err)
	}
	c, err := InsertCourse(org, name, singleAssm, groupAssm, description, slipdays, isSlipdays, isPrivRepo, isCodeReview)
	if err != nil {
		t.Error(err)
	}
	if c.org.name != org.name {
		t.Errorf("Expected %v, got %v", org.name, c.org.name)
	}
}
