package database

import (
	"fmt"
	"time"
)

// UserError is an error implementation that includes a time and message.
type UserError struct {
	When time.Time
	What string
}

func (e UserError) Error() string {
	return fmt.Sprintf("%v: %v", e.When, e.What)
}
