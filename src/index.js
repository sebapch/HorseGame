import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'
import { observe } from './Game'

const root = document.getElementById('root')

observe((horsePosition) =>
  ReactDOM.render(<Board horsePosition={horsePosition} />, root)
)