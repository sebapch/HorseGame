
const randomX = Math.floor(Math.random() * (8)); //Horse Location randomizer
const randomY = Math.floor(Math.random() * (8));
let horsePosition = [randomX, randomY];
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

    if(dy === 0){
      return (
        (Math.abs(dx))
      ) 
    } else if (dx === 0) {
      return (
        (Math.abs(dy))
      )
    }

    
  }