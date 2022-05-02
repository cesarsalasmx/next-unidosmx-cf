import PropTypes from "prop-types";
import React, {useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../../../components/dashboard/VerticalLayout"),{ ssr: false});
// Custom Scrollbar
//import SimpleBar from "simplebar-react";
// import images
const Dashboard = props => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu)
  };
  const handleFormChange = () => {}
  const today = new Date().toDateString();
  return (
    <React.Fragment>
       <Layout>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Usuarios - Unidos Mx</h6>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Agregar usuario:</h4>
                    <Form>
                        <FormGroup>
                            <Label className="input_public_post_form">Nombre:</Label>
                            <Input 
                            type="text"
                            name="firsName"
                            placeholder="Nombre:"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Apellidos:</Label>
                            <Input 
                            type="text"
                            name="lastName"
                            placeholder="Apellidos:"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Correo electrónico:</Label>
                            <Input 
                            type="text"
                            name="email"
                            placeholder="Correo electrónico:"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Contraseña:</Label>
                            <Input 
                            type="password"
                            name="password"
                            placeholder="Contraseña:"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Fecha de nacimiento:</Label>
                            <Input 
                            type="date"
                            name="birthday"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Género:</Label>
                            <Input 
                            type="select"
                            name="gender"
                            onChange={handleFormChange}
                            required="required"
                            >
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Prefiero no decirlo</option>
                            </Input>
                            <Label className="input_public_post_form">Ciudad:</Label>
                            <Input 
                            type="text"
                            name="city"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Button type="submit" className="input_public_post_form">Crear usuario</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      </Layout>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default Dashboard;
