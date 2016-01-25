# autograder-fronend

developing frontend for autograder system @ UiS

# Instructions

You need to install npm and following packages:
run

$ npm install --save react react-dom babelify babel-preset-react

to compile your React code run :

$ browserify -t [ babelify --presets [ react ] ] web/main.js -o build/bundle.js

compiled JavaScript should be in /build while source in /web

more info at [facebook.github.io](https://facebook.github.io/react/docs/getting-started.html)
