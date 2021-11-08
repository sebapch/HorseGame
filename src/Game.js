let horsePosition = [0, 0]
let observer = null

function emitChange() {
  observer(horsePosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveHorse(toX, toY) {
  horsePosition = [toX, toY]
  emitChange()
}

export function canMoveHorse(toX, toY) {
    const [x, y] = horsePosition
    const dx = toX - x
    const dy = toY - y
  
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
  }