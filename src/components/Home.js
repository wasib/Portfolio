import React, { Component } from "react";
export default class Home extends Component {

constructor(props){
  super(props)
}



 render() {
  return (
   <div className={this.props.active ? "page page--open" : "page page--close"}>
   <div className="page-internal">
    <h1>Home</h1>
    <p>Hello from the home page!</p>
    </div>
   </div>
  )
 }
}