DROP SCHEMA IF EXISTS agdatabase;
CREATE SCHEMA agdatabase;
USE agdatabase;
CREATE TABLE user (userid int NOT NULL PRIMARY KEY AUTO_INCREMENT, github VARCHAR(255), last_name VARCHAR(255), first_name VARCHAR(255));
CREATE TABLE admin (userid INT NOT NULL PRIMARY KEY);
CREATE TABLE teacher (userid INT NOT NULL PRIMARY KEY);
CREATE TABLE student (userid INT NOT NULL PRIMARY KEY, student_numer INT NOT NULL);
CREATE TABLE course (courseid INT NOT NULL PRIMARY KEY, course_name VARCHAR(255) NOT NULL);
CREATE TABLE admin_course (admin_id INT NOT NULL, course_id INT NOT NULL, FOREIGN KEY (admin_id) REFERENCES admin(userid),FOREIGN KEY (course_id) REFERENCES course(courseid), PRIMARY KEY (admin_id, course_id));
CREATE TABLE teacher_course (teacher_id INT NOT NULL, course_id INT NOT NULL, FOREIGN KEY (teacher_id) REFERENCES teacher(userid), FOREIGN KEY (course_id) REFERENCES course(courseid), PRIMARY KEY (teacher_id, course_id));
CREATE TABLE student_course (student_id INT NOT NULL, course_id INT NOT NULL, FOREIGN KEY (student_id) REFERENCES student(userid),FOREIGN KEY (course_id) REFERENCES course(courseid), PRIMARY KEY (student_id, course_id));
CREATE TABLE groups (groupid INT NOT NULL PRIMARY KEY);
CREATE TABLE student_group (student_id INT NOT NULL, group_id INT NOT NULL, FOREIGN KEY (student_id) REFERENCES student(userid), FOREIGN KEY (group_id) REFERENCES groups(groupid), PRIMARY KEY (student_id, group_id));
CREATE TABLE asmt (asmtid INT NOT NULL PRIMARY KEY, number INT NOT NULL, course_name VARCHAR(255) NOT NULL, course_id INT NOT NULL, FOREIGN KEY (course_id) REFERENCES course(courseid));
CREATE TABLE student_asmt (student_id INT NOT NULL, asmt_id INT NOT NULL,FOREIGN KEY (student_id) REFERENCES student(userid),FOREIGN KEY (asmt_id) REFERENCES asmt(asmtid), PRIMARY KEY (student_id, asmt_id));
CREATE TABLE group_asmt (group_id INT NOT NULL, asmt_id INT NOT NULL,FOREIGN KEY (group_id) REFERENCES groups(groupid),FOREIGN KEY (asmt_id) REFERENCES asmt(asmtid), PRIMARY KEY (group_id, asmt_id));
CREATE TABLE org (orgid INT NOT NULL PRIMARY KEY, url VARCHAR(255) NOT NULL);
CREATE TABLE course_organization (course_id INT NOT NULL, org_id INT NOT NULL,FOREIGN KEY (course_id) REFERENCES course(courseid),FOREIGN KEY (org_id) REFERENCES org(orgid), PRIMARY KEY (course_id, org_id));
CREATE TABLE repo (repoid INT NOT NULL PRIMARY KEY, name VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, group_name VARCHAR(255) NOT NULL, group_id INT NOT NULL,FOREIGN KEY (group_id) REFERENCES groups(groupid));
CREATE TABLE org_repo (org_id INT NOT NULL, repo_id INT NOT NULL,FOREIGN KEY (org_id) REFERENCES org(orgid),FOREIGN KEY (repo_id) REFERENCES repo(repoid), PRIMARY KEY (org_id, repo_id));
CREATE TABLE student_repo (student_id INT NOT NULL, repo_id INT NOT NULL,FOREIGN KEY (student_id) REFERENCES student(userid),FOREIGN KEY (repo_id) REFERENCES repo(repoid), PRIMARY KEY (student_id, repo_id));
