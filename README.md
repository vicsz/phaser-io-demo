### Phaser Io Demo

## Build the App

npm install

## Starting the App

npm start server.js

## Creating the Node distributable package 

Create a tar file (won't work in AWS beanstalk)
npm pack

Create a zip of source files only (exlude node_modules)
npm run zip-source

Create a zip of everything (including node_modules)
npm run zip-all