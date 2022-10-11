//function component //rfc
// jarang di gunakan
// import React from 'react'
// export default function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// class component //rcc
// khusus komponen besar
// import React, { Component } from 'react'
// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>Navbar</div>
//     )
//   }
// }

// menggunakan arrow function // rafc
// khusus komponen kecil karena ridak bisa menggunakan lifecircle
import React from "react";
/* export */ const Navbar = () => {
  //syarat pemanggilan di file App.js harus menggunakan kurung kurawal {Navbar}
  return <div>Navbar</div>;
};
export default Navbar; // exsport bisa begini
