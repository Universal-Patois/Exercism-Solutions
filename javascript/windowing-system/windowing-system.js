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

  move(newPosition) {
    newPosition.x < 0 && newPosition.move(0, newPosition.y)
    newPosition.y < 0 && newPosition.move(newPosition.x, 0)

    if (newPosition.x + this.size.width > this.screenSize.width) {
      const newX = newPosition.x - (this.size.width - (this.screenSize.width - newPosition.x));
      newPosition.move(newX, newPosition.y);
    }
    if (newPosition.y + this.size.height > this.screenSize.height) {
      const newY = newPosition.y - (this.size.height - (this.screenSize.height - newPosition.y));
      newPosition.move(newPosition.x, newY);      
    }

    this.position.move(newPosition.x, newPosition.y);
  }
}


export const changeWindow = (window) => {
  window.resize(new Size(400, 300))
  window.move(new Position(100, 150))
  return window
}