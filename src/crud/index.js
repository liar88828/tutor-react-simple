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

    if (this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananYangSelainDiPilih = this.state.makanan
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });
      this.setState({
        makanan: [
          ...makananYangSelainDiPilih,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: " ",
      deskripsi: " ",
      harga: 0,
      id: " ",
    });
  };

  //edit
  editData = (id) => {
    // console.log('id : ',id )
    const makananYangDiPilih = this.state.makanan
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: makananYangDiPilih[0].nama,
      deskripsi: makananYangDiPilih[0].deskripsi,
      harga: makananYangDiPilih[0].harga,
      id: makananYangDiPilih[0].id,
    });
  };

  hapusData = (id) => {
    // console.log("hapus id yang ke : ", id);
    const hapusMakanan = this.state.makanan
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });
    this.setState({
      makanan: hapusMakanan,
    });
  };

  render() {
    // console.log((this.state.makanan));
    return (
      <div>
        <NavScrollExample />
        <div className="container mt-4"></div>
        <BasicExample
          //akan dikirim ke table.js
          makanan={this.state.makanan}
          editData={this.editData}
          hapusData={this.hapusData}
        />
        <Folmulir
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}
