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

  return (
    <React.Fragment>
       <Layout>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Blog - Unidos Mx</h6>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Publicar un post en el blog:</h4>
                    <Form>
                        <FormGroup>
                            <Label className="input_public_post_form">Título</Label>
                            <Input 
                            type="text"
                            name="title"
                            placeholder="Título"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Descripción</Label>
                            <Input 
                            type="textarea"
                            name="content"
                            placeholder="Descripción"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Label className="input_public_post_form">Imagen</Label>
                            <Input 
                            type="file"
                            name="image"
                            onChange={handleFormChange}
                            required="required"
                            accept="image/*"
                            />
                            <Label className="input_public_post_form">Categoría</Label>
                            <Input 
                            type="text"
                            name="category"
                            placeholder="categoría"
                            onChange={handleFormChange}
                            required="required"
                            />
                            <Button type="submit" className="input_public_post_form">Publicar causa</Button>
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
