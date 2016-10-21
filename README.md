# autograder-fronend

# demo installation steps

	{install myslq-server}

	$ go get github.com/bachopp/autograder
	mysql> create database agdatabase;
	mysql> create user 'autograder'@'localhost' identified by 'autograder';
	mysql> grant all privileges on agdatabase.* to autograder@localhost;
	mysql> set password for autograder@localhost = password("autograder");

	$ go test -run TestD

	start server:
	$ $GOPATH/bin/autograder

	open browser:
	localhost:8000


developing frontend for autograder system @ UiS

# requirements:

* mysql-server
* go get
* npm
* node.js

*node.js is installed with [npm](https://www.npmjs.com/)*

# dependencies:

You need to have mysql-server instance running for autograder to work.
	$ go get github.com/ziutek/mymysql/thrsafe
	$ go get github.com/ziutek/mymysql/autorc
	$ go get github.com/ziutek/mymysql/godrv

# Instructions
You need to install npm and run:

	$ npm install

this will install dependencies locally

# Modifications

To compile your JSX, CommonJS run:

	$ npm start

This will run a script that is defined in package.json in /web/src/

Compiled code is located in web/public, while source is in web/src
more info at [facebook.github.io](https://facebook.github.io/react/docs/getting-started.html)
