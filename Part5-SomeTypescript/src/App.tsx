import * as React from 'react'

import { HelloWorld } from './HelloWorld'

import './App.css'
const logo = require('./logo.svg')

export const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>

    <HelloWorld name="Roflcopter"/>

    <div className="App-content">
      <h1>Welcome to React and TypeScript</h1>
      <p>TypeScript is just JavaScript, but with <em>Types</em> :D</p>

      <h2>What do I mean by types?</h2>
      <p>Types are just restrictions on what properties you can assign to an object.</p>
      <p>You could also think of them as the "shape" of the object you expect.</p>

      <HelloWorld name="TunaFish"/>

      <h2>What the heck is React?</h2>
      <p>It's a JavaScript library for building user interfaces.</p>
      <p>It allows you to define <em>Components</em> that you can re-use throughout your app</p>
    </div>
  </div>
)
