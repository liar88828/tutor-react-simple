import React, { Component } from "react";
import Folmulir from "./Folmulir";
import NavScrollExample from "./NavbarComponent";
import BasicExample from "./Table";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: [],
      nama: " ",
      deskripsi: " ",
      harga: 0,
      id: " ",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value, //harus di perhatikan
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Data : ", this.state);
    this.setState({
      makanan: [
        ...this.state.makanan,
        {
          id: this.state.makanan.length + 1,
          nama: this.state.nama,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
        }
      ]
    });

    this.setState({
      nama: " ",
      deskripsi: " ",
      harga: 0,
      id: " ",
    });
  };

  render() {
    // console.log((this.state.makanan));
    return (
      <div>
        <NavScrollExample />
        <div className="container mt-4"></div>
        <BasicExample makanan={this.state.makanan} />
        <Folmulir
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
