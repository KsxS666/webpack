import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import Cjpg from './cj.jpg'
console.log(Cjpg)
var img = new Image()
img.src = Cjpg
var dom = document.getElementById('root')
dom.append(img)
// var Cjpg = require('./cj.jpg')
// require 需对应  module.exports
// var Header = require('./header')
// var Sidebar = require('./sidebar')
// var Content = require('./content')


new Header()
new Sidebar()
new Content()
