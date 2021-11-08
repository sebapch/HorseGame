import React from 'react'
import Square from './Square'
import Horse from './Horse'
import {moveHorse, canMoveHorse} from './Game'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'

function renderSquare(i, horsePosition) {
    const x = i % 8
    const y = Math.floor(i / 8)

  
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, horsePosition)}
        </BoardSquare>
      </div>
    )
  }

  function renderPiece(x, y, [horseX, horseY]) {
    if (x === horseX && y === horseY) {
      return <Horse />
    }
  }

  function handleSquareClick(toX, toY) {
    if (canMoveHorse(toX, toY)) {
        moveHorse(toX, toY)
      }
  }
  
  function Board({ horsePosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, horsePosition))
    }
  
    return (
        <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '250px',
          height: '250px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
      </DndProvider>
    )
  }

  export default Board;