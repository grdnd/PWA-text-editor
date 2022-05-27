# Homework 19: JATE (Just A Text Editor) - A Progressive Web Application

![License](https://img.shields.io/badge/License-MIT-blue.svg)

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

![JATEscreenshot](https://user-images.githubusercontent.com/93315369/169623911-39a20b22-9683-474f-abda-6ddd42b1a72f.png)

Once we access the live server, you're done! The application will be ready to use and you can start taking notes with JATE immediately!



![JATEgif](https://user-images.githubusercontent.com/93315369/169623918-667d6fea-044f-42ea-9b01-fa7cd0f9e138.gif)

If the user would like to install the application for offline use, simply hit the [ install ] button and voila, you may now run JATE on your favorite web browser!

### Contributions

If you would like to make a contribution to this project, you can access the application's github repository at:

[JATE-PWA-Text-Editor](https://github.com/grdnd/PWA-text-editor)

### Tests

![JATEgif](https://user-images.githubusercontent.com/93315369/169623918-667d6fea-044f-42ea-9b01-fa7cd0f9e138.gif)

### Questions

If you have any questions, please feel free to contact me at: 

:octocat:: [Find me on Github!]([https://github.com/grdnd](https://github.com/grdnd))

📨: gordonhdo@gmail.com | gordfolio@gmail.com

## License

Copyright (c) 2022 Gordon Do

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
