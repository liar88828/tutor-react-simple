import Table from "react-bootstrap/Table";

function BasicExample({ makanan, editData, hapusData }) {
  // diambil dari index.js
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanan.map((makanan, index) => {
          return (
            // return harus di kasih kurung
            <tr key={makanan.id}>
              {/* harus di kasih key */}
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>{makanan.harga}</td>
              <td>
                <button
                  className="btn btn-warning m-1"
                  onClick={() => editData(makanan.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger  "
                  onClick={() => hapusData(makanan.id)}
                >
                  hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
