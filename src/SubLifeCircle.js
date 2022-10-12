import React, { Component } from "react";

export default class SubLifeCircle extends Component {

  componentWillUnmount() {
    this.props.ubahmakanan("sate")
  }
  render() {
    return <div>Componen sub LifeCircle</div>;
  }
}
