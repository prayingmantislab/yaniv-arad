import React, { Component } from 'react'
import ParentComp from './Ex5_2/Parent'
import './App.css'

class App extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <div>
            <h1>App</h1>
            <ParentComp />
         </div>
      )
   }
}
export default App
