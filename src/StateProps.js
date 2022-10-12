import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "bakso",
    };
  }
  // class biasa
  // gantiMakanan(namaMakan) {
  //   this.setState({
  //     makanan: namaMakan,
  //   });
  // }

  // dengan function
  gantiMakanan = (namaMakan) => {
    this.setState({
      makanan: namaMakan,
    });
  };

  
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {/* 1 line */}
        {/* <button onClick={() => this.setState({ makanan: "soto" })}> ubah </button> */}
        {/* dengan fungsi */}
        <button onClick={() => this.gantiMakanan("soto")}>ubah</button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    );
  }
}
