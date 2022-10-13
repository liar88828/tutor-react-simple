import React, { Component } from "react";
import Folmulir from "./Folmulir";
import NavScrollExample from "./NavbarComponent";
import BasicExample from "./Table";

export default class Crud extends Component {
  

  render() {
    return (
      <div>
        <NavScrollExample />
        <div className="container mt-4"></div>
        <BasicExample />
        <Folmulir
       
        />
      </div>
    );
  }
}
