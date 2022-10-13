import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Folmulir = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                placeholder="Nama makanan"
              />
            </Form.Group>

            <Form.Group controlId="deskripsi">
              <Form.Label>Deskripsi </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="deskripsi"
                placeholder="deskirpsi"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                placeholder="harga makanan"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Folmulir;
