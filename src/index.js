import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import Cjpg from './cj.jpg'
import style from './index.scss'
import createAvatar from './createAvatar'
import './index.scss'
createAvatar()
var img = new Image()
img.src = Cjpg
img.classList.add(style.avatar)
var dom = document.getElementById('root')
dom.append(img)
console.log('lc666')
// dom.innerHTML = '<div class="iconfont iconguanfangbanben"></div>'
// var Cjpg = require('./cj.jpg')
// require 需对应  module.exports
// var Header = require('./header')
// var Sidebar = require('./sidebar')
// var Content = require('./content')


new Header()
new Sidebar()
new Content()

