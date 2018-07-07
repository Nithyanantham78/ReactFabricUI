const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST = path.resolve(__dirname,"dist");
var SRC = path.resolve(__dirname,"src");



var config = {
	entry:SRC+"/index.js",
	output:{
		path:DIST+"/",
		filename:"bundle.js",
		publicPath:"/"
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			include:SRC,
			exclude:/node_modules/,
			use:
			{
				loader:"babel-loader"
			},
		},
		{
			test: /\.css$/,
			exclude:/node_modules/,
			use:["style-loader","css-loader"]	
      		
		}
		]
	},
  	plugins: [
	    new HtmlWebpackPlugin({
	      template: "./src/html/index.html",
	      filename: "./index.html"
	    })
	]
};


module.exports = config;