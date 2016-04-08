package database

// User represents db table user
type User struct {
	ID        int
	Github    string
	LastName  string
	FirstName string
	IsAdmin   bool
}

// Admin represents admin in db
type Admin struct {
	User
}

// NewAdmin created new struct based on user
func NewAdmin(user User) *Admin {
	a := new(Admin)
	user.IsAdmin = true
	return a
}

// Teacher represents admin in db
type Teacher struct {
	User
}

// NewTeacher created new struct based on user
func NewTeacher(user User) *Teacher {
	t := new(Teacher)
	user.IsAdmin = false
	return t
}

// Student represents admin in db
type Student struct {
	User
	number int
}

// NewStudent created new struct based on user
func NewStudent(user User, number int) *Student {
	s := new(Student)
	user.IsAdmin = false
	return s
}
