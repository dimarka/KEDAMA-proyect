import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../../shared/Header.jsx";
import ProductNav from "../../shared/ProductNav.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import '../../../src/styles/shared.css'
import api from "../../api"


const Users = () => {

  const [records, setRecords] = useState([])

  useEffect(() => {
    const fetchGetAll = async () => {
      const response = await api.users.getAllUsers();
      setRecords(response);
    };
    fetchGetAll()
  }, []);

  return (
    <div className="container-Category">

      <Header headerText={"Listar usuarios"} />

      {/* <ProductNav navSwitch={"Register"} page={"users"} /> */}

      <Container >
        <Row>
          <Col >

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> <div className="just-font">Listar información de usuario</div> </Form.Label>
                <Form.Control type="email" placeholder="Nombre o ID" />

              </Form.Group>
              <div className="space-button">
                <Link to="/categories/users">
                  <button type="submit" className="float-right" >
                    Listar
                  </button>
                </Link>

                <Link to="/categories/users/updateinfousers">
                  <button type="submit" className="float-right" >
                    Actualizar
                  </button>
                </Link>




                <Link to="/categories/users/updaterolusers">
                  <button type="submit" className="float-right" >
                    Cambiar Rol
                  </button>
                </Link>
              </div>

            </Form>


          </Col>


          <Col >
            <Table >
              <thead >
                <tr>
                  <th>Nombre completo</th>
                  <th>e-mail</th>
                  <th>Estado</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>{records.map((row) => (
                <tr>
                  <td >{row.name}</td>
                  <td >{row.email}</td>
                  <td >{row.state ? "Activo" : "Inactivo"}</td>
                  <td >{row.role}</td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Col>

        </Row>

        <Footer />
      </Container>
    </div>
  )


}
export default Users