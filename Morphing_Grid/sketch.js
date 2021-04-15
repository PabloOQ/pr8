var m = []
var squareSize

let grid = 21
let squareSpeed = 1
let colorSpeed = 19.5
let circleSpeed = 1
let speed = 0.01

function setup() {
  let size = 720
  createCanvas(size, size)
  let mid = round(grid / 2) - 1
  for (let i = 0; i < grid; i++) {
    m[i] = []
    for (let j = 0; j < grid; j++) {
      m[i][j] = (-abs(mid - i) - abs(mid - j)) + grid
    }
  }
  squareSize = width / m.length

  colorMode(HSL, 360)
}

function draw() {
  background(0)
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m.length; j++) {
      m[i][j] += speed
      l = squareSize * ((1 + sin((m[i][j]) * squareSpeed)) / 2)
      offSet = (squareSize - l) / 2
      fill(color((m[i][j] * colorSpeed) % 360, 360, 180))
      square((i * squareSize) + offSet, (j * squareSize) + offSet, l,
        (squareSize / 2) * ((1 + sin((m[i][j]) * circleSpeed + PI)) / 2))
    }
  }
}