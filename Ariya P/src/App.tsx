import * as React from 'react'

import './App.css'

import { Header } from './components/Header'

export const App = () => (
  <div className="App">
   <Header
    label="Ariya Phaophongsavath"
    links={[
      {
        label: 'Portfolio',
        target: '#'
      },
      {
        label: 'About',
        target: '#'
      },
      {
        label: 'Contact',
        target: '#'
      }
    ]}
   />
  </div>
)
