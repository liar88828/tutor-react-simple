import React, { Component } from "react";

export default class Operan extends Component {
  // gantiMakan(makan) {
  //   this.setState({
  //     makanan: makan,
  //   });
  // }

  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      <div>
        <h2>Operan state yang bisa menjadi props : {makanan}</h2>
        {/* <button onClick={() => this.gantiMakan("mie Ayam")}> ubah </button> */}
        <button onClick={() => gantiMakanan("mie ayam")}>ganti props</button>
      </div>
    );
  }
}
