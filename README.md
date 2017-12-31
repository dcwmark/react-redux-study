# react-redux-study

From: https://github.com/Remchi/reddice

1. mkdir react-redux-study
1. cd react-redux-study
1. npm init -y
1. git init
1. __Server Side__
1. [root] npm install --save express
1. [root] npm install --save-dev babel-cli
1. [root]/.babelrc > "presets": [ "es2015" ]
1. [root] npm install --save-dev babel-preset-es2015
1. [root] mkdir server
1. cd server
1. touch [root/server]/index.js
1. [root]/index.js > set up express server (listening on 3000)
1. [root]/package.json > "script": "server": "babel-node server/index.js"
1. > npm run server
1. browser > localhost:3000
1. npm install --save-dev nodemon
1. [root]/package.json > "script":
  1. change "server": > "nodemon --watch server --exec babel-node -- server/index.js"
  1. server will now serving with nodemon instead of babal-node directly.
  1. nodemon will watch folder server for any file changes.
  1. nodemon will serve babel-node
  1. adding "--" before server/index.js as param to nodemon instead to babel-node.
1. __Client Side__
1. [root] mkdir client
1. touch [root/client]/index.js
1. mkdir [root/client]/components
1. touch [root/client/components]/App.js
1. [root] npm install --save react react-dom
1. [root/server/index.html] add ```<script src="bundle.js"></script>```
1. [root/server/indexjs] implement webpack / webpackMiddleware / webpackConfig
1. [root]/webpack.config.js
1. [root] npm install --save-dev webpack webpack-dev-middleware
1. [root] npm install --save-dev babel-loader
1. [root]/.babelrc > add 'react' to "presets"
1. [root] npm install --save-dev babel-preset-react
1. [root/server/index.js] add webpackHotMiddleware
1. [root] npm install --save-dev react-hot-loader webpack-hot-middleware
1. __Test webpack hot reload__





