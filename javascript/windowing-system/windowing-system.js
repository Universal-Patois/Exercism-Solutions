// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */


// export class Size {
//   constructor(width = 80, height = 60) {
//     this.width = width
//     this.height = height
//   }

//   resize(newWidth, newHeight) {
//     this.width = newWidth
//     this.height = newHeight
//   }
// }
 export function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
 }

 Size.prototype.resize = function resize(newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
 }

 export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
 }

Position.prototype.move = function move(newX, newY) {
  this.x = newX
  this.y = newY
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y
    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth))
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight))
    this.size.resize(newWidth, newHeight)
  }
}


