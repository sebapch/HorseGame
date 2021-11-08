import React from 'react'
import Square from './Square'
import Horse from './Horse'
import {moveHorse, canMoveHorse} from './Game'

function renderSquare(i, [horseX, horseY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isHorseHere = x === horseX && y === horseY
    const black = (x + y) % 2 === 1
    const piece = isHorseHere ? <Horse /> : null
  
    return (
      <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>{piece}</Square>
      </div>
    )
  }

  function handleSquareClick(toX, toY) {
    if (canMoveHorse(toX, toY)) {
        moveHorse(toX, toY)
      }
  }
  
  export default function Board({ horsePosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, horsePosition))
    }
  
    return (
      <div
        style={{
          width: '150px',
          height: '150px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    )
  }