# Homework 19: JATE (Just A Text Editor) - A Progressive Web Application

## Description

The Text Editor is a single-page progressive web application that allows users to take notes on their code with full support of JavaScript! This application runs in the browser but may also be downloaded to run offline!

This application uses various technologies such as:

`Node.js | Javascript | Express | Babel | Webpack | idb | http-server | html/css loaders`

## Installation

Initially, we must install our dependencies with `npm i`.

(_Thanks to `concurrently`, if we run this command once - packages will be installed for all directories of this application._)

Once our dependencies have been successfully installed we can proceed to run the complete build: `npm run start` or any of the following scripts to prepare our application in its various states.

    "scripts": {
      "start": "npm run build && cd server && npx nodemon",
      "start:dev": "concurrently \"cd server && npm run server\" \"cd client && npm run dev\"",
      "server": "cd server nodemon server.js --ignore client",
      "build": "cd client && npm run build",
      "install": "cd client && npm install",
      "client": "cd client && npm start"
    }

## Usage

Once we access the live server, you're done! The application will be ready to use and you can start taking notes with JATE immediately!

If the user would like to install the application for offline use, simply hit the [ install ] button and voila! You may now run JATE on your favorite web browser

### Contributions

If you would like to make a contribution to this project, you can access the application's github repository at:

[JATE-PWA-Text-Editor]()

### Tests

### Questions

## License
