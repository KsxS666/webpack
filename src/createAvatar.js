import Cjpg from './cj.jpg'
let createAvatar = () => {
  var img = new Image()
  img.src = Cjpg
  var dom = document.getElementById('root')
  dom.append(img)
}
export default createAvatar