import * as React from 'react'

import { TodoList } from './components/TodoList'
import './App.css'
const logo = require('./logo.svg')

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>

    <div className="App-content">
      <TodoList />
    </div>
  </div>
)
