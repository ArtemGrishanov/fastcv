Install instructions:

Create "package.json" file
Create "webpack.config.js" file
Create ".babelrc" file
npm install webpack webpack-cli --save-dev
npm install babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-0 --save-dev
npm install react react-dom redux react-redux --save
npm install --save-dev css-loader style-loader

Webpack watch mode:

Run "webpack --watch" in console tab.

Webpack dev server http://localhost:8080/:

npm install --save-dev webpack-dev-server
node_modules/.bin/webpack-dev-server
or
Write in package.json:
"scripts": {
  "start:dev": "webpack-dev-server --open"
}"
Then "npm start:dev"
