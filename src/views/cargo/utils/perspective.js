// mouse
const mouse = {
  _x: 0, _y: 0, x: 0, y: 0,
  updatePosition: function (event) {
    // 获取鼠标当前相对(0,0)的坐标位置
    let e = event || window.event
    this.x = e.clientX - this._x
    this.y = (e.clientY - this._y) * -1
  },
  setOrigin: function (e) {
    // 设置鼠标的初始坐标，即把#container的中心位置设为(0,0)
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2)
  },
  show: function () {
    //  用来展示鼠标的当前位置（你可以用 console.log() 或别的什么方式）
    console.log('(' + this.x + ', ' + this.y + ')')
  }
}

const perspective = function () {
  // init
  // let container = document.getElementById('container')
  let inner = document.getElementById('inner')

  const onMouseEnterHandler = (event) => {update(event, inner)}
  const onMouseLeaveHandler = () => {
    // cubic-bezier称为三次贝塞尔曲线，主要是生成速度曲线的函数，规定是cubic-bezier(<x1>,<y1>,<x2>,<y2>)
    let childStyle = `transition: all 300ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s; transform: matrix(1, 0, 0, 1,0, 0)`
    inner.style = `transform: perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    inner.children[1].style = childStyle
    inner.children[2].style = childStyle
  }
  const onMouseMoveHandler = (event) => {if (isTimeToUpdate()) update(event, inner)}
  inner.onmouseenter = onMouseEnterHandler
  inner.onmouseleave = onMouseLeaveHandler
  inner.onmousemove = onMouseMoveHandler

  // 设置鼠标的中心位置
  mouse.setOrigin(inner)
}

function isTimeToUpdate (counter = 0, updateRate = 10) {
  // 每执行 updateRate 次，更新才会发生一次。
  return counter++ % updateRate === 0
}

function update (event, target) {
  mouse.updatePosition(event)
  updateTransformStyle(
    (mouse.y / target.offsetHeight * 5).toFixed(2),
    (mouse.x / target.offsetWidth * 5).toFixed(2),
    target
  )
}

function updateTransformStyle (x, y, target) {
  let style = 'perspective(700px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)  scale3d(1, 1, 1)'
  let childStyle = `transition: none 0s ease 0s ; transform: matrix(1, 0, 0, 1, ${x}, ${y})`
  target.children[1].style = childStyle
  target.children[2].style = childStyle
  // transform 的兼容性
  target.style.transform = style
  target.style.webkitTransform = style
  target.style.mozTransform = style
  target.style.msTransform = style
  target.style.oTransform = style
}

export default perspective
