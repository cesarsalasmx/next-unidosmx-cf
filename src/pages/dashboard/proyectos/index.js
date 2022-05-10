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
import { gql, useQuery } from "@apollo/client";
const Layout = dynamic(() => import("../../../components/dashboard/VerticalLayout"),{ ssr: false});
// Custom Scrollbar
//import SimpleBar from "simplebar-react";
// import images
const VIEW_CAUSES = gql`
  query view_causes{
    AllPostsQuery{
      id,
      title,
      date,
      value,
      slug
    }
  }
`; 
const Dashboard = props => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu)
  };
  const { data, loading } = useQuery(VIEW_CAUSES);
  if (loading) return <div>Loading</div>
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
                        {data.AllPostsQuery.map((causes) => {
                          return(
                          <tr key={causes.id}>
                            <th scope="row">#{causes.id}</th>
                            <td>
                              <div>
                                {causes.title}
                              </div>
                            </td>
                            <td>{causes.date}</td>
                            <td>$0</td>
                            <td>
                              <span className="badge bg-success">
                                Publicado
                              </span>
                            </td>
                            <td>
                              <div>
                                <Link href={`/dashboard/proyectos/editar/${causes.slug}`} className="btn btn-primary btn-sm">
                                  <a>
                                  Ver más
                                  </a>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          )
                        })}
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
