// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export const Size = function (width = 80, height = 60) {
  this.width = width;
  this.height = height;
};

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export const Position = function (x = 0, y = 0) {
  this.x = x;
  this.y = y;
};

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  #clamp(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }

  resize(newSize) {
    const maxWidthPossible = this.screenSize.width - this.position.x;
    const maxHeightPossible = this.screenSize.height - this.position.y;

    const newWidth = this.#clamp(newSize.width, 1, maxWidthPossible);
    const newHeight = this.#clamp(newSize.height, 1, maxHeightPossible);

    this.size.resize(newWidth, newHeight);
  }

  move(newPostion) {
    const maxXPossible = this.screenSize.width - this.size.width;
    const maxYPossible = this.screenSize.height - this.size.height;

    const newX = this.#clamp(newPostion.x, 0, maxXPossible);
    const newY = this.#clamp(newPostion.y, 0, maxYPossible);

    this.position.move(newX, newY);
  }
}

export function changeWindow(newProgramWindow) {
  newProgramWindow.move(new Position(100, 150));
  newProgramWindow.resize(new Size(400, 300));
  return newProgramWindow;
}
