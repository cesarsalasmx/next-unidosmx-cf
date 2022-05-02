import PropTypes from "prop-types";
import React, {useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
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
  const today = new Date().toDateString();
  return (
    <React.Fragment>
       <Layout>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Causas - Unidos MX</h6>
              </Col>

              <Col md="4">
                <div className="float-end d-none d-md-block">
                  <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle color="primary" className="btn btn-primary dropdown-toggle waves-effect waves-light">
                      <i className="mdi mdi-cog me-2"></i> Ajustes Rápidos
                    </DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem tag="a" href="#">Action</DropdownItem>
                      <DropdownItem tag="a" href="#">Another action</DropdownItem>
                      <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Proyectos / Causas</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">(#) Id</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Fecha de publicación</th>
                          <th scope="col">Monto recaudado</th>
                          <th scope="col" colSpan="2">
                            Estado
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#142</th>
                          <td>
                            <div>
                              Sonríe
                            </div>
                          </td>
                          <td>01/04/2022</td>
                          <td>$700</td>
                          <td>
                            <span className="badge bg-success">
                              Publicado
                            </span>
                           </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Ver más
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#143</th>
                          <td>
                            <div>
                              Soy futuro
                            </div>
                          </td>
                          <td>01/04/2022</td>
                          <td>$1200</td>
                          <td>
                            <span className="badge bg-success">Publicado</span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Ver más
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#144</th>
                          <td>
                            <div>
                              Reforesta Cancún
                            </div>
                          </td>
                          <td>01/04/2022</td>
                          <td>$500</td>
                          <td>
                            <span className="badge bg-success">
                              Publicado
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Ver más
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
