import React, { Component } from 'react'
import ChildComp from '../Ex5_2/Child'

class ParentComp extends Component {
   constructor() {
      super()
   }
   render() {
      return (
         <div>
            <h1>Parent</h1>
            <ChildComp />
         </div>
      )
   }
}
export default ParentComp
