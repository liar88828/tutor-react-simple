import React from "react";

const makanan = [
  { nama: "soto", harga: 12000 },
  { nama: "mie ayam", harga: 20000 },
  { nama: "nasi goreng", harga: 10000 },
  { nama: "sengsu", harga: 30000 },
];

// Reduce
const totalBayar = makanan.reduce((totalHarga, makanan) => {
  return totalHarga + makanan.harga;
}, 0);

function map() {
  return (
    <div>
      <h2>Map Sederhana </h2>
      <ul>
        {makanan.map((makanan, index) => (
          <li>
            {index + 1} nama : {makanan.nama} - harga : {makanan.harga}
          </li>
        ))}
      </ul>

      <h4>Filter Harga lebih dari 10000 : </h4>
      <ul>
        {makanan
          .filter((makanan) => makanan.harga > 10000)
          .map((makanan, index) => (
            <li>
              {index + 1} nama :{makanan.nama} - harga {makanan.harga}
            </li>
          ))}
      </ul>

      <h3>Total Harga : {totalBayar}</h3>
    </div>
  );
}

export default map;
