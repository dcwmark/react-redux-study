# react-redux-study

From: https://www.youtube.com/watch?v=5oiXG9f6GO0

1. mkdir react-redux-study
1. cd react-redux-study
1. npm init -y
1. git init
1. npm install --save express
1. npm install --save-dev babel-cli
1. [root]/.babelrc > "presets": [ "es2015" ]
1. npm install --save-dev babel-preset-es2015
1. mkdir server
1. touch index.js
1. [root]/index.js > set up express server (listening on 3000)
1. [root]/package.json > "script": "server": "babel-node server/index.js"
1. > npm run server
1. browser > localhost:3000
1. npm install --save-dev nodemon
1. [root]package.json > "script":
  * change "server": > "nodemon --watch server --exec babel-node -- server/index.js"
  * server will now serving with nodemon instead of babal-node directly.
  * nodemon will watch folder server for any file changes.
  * nodemon will serve babel-node
  * adding "--" before server/index.js as param to nodemon instead to babel-node.
