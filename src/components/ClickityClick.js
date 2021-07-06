
import React from 'react';
 
export default class ClickityClick extends React.Component {
  constructor() {
    super();
    this.state = {clicked : true}}
handleClick = () =>{this.setState(previous=>{
    return{clicked: !previous.clicked}
})
console.log(this.state.clicked)}
render(){return(<div onClick={this.handleClick}>Click Me!</div>)}}


