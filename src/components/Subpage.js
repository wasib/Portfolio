import React, { Component } from "react";
export default class Subpage extends Component {

constructor(props){
  super(props)
}



 render() {
  return (
   <div className={this.props.active ? "page page--open" : "page page--close"}>
   <div className="page-internal">
    <h1>Subpage</h1>
    <p>Hello from a sub page!</p>
    </div>
   </div>
  )
 }
}