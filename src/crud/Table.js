import Table from "react-bootstrap/Table";

function BasicExample({ makanan }) {
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
          return ( // return harus di kasih kurung
            <tr>
              <td key={makanan.id}>{index+1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.deskripsi}</td>
              <td>{makanan.harga}</td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
