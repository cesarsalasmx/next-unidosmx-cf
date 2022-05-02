import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import { Link } from "next/router";
import Image from "next/image";
// Components
// import Footer from "../../components/dashboard/VerticalLayout/Footer";
// import Header from "../../components/dashboard/VerticalLayout/Header";
// import Sidebar from "../../components/dashboard/VerticalLayout/Sidebar";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../../components/dashboard/VerticalLayout"),{ ssr: false});


// Custom Scrollbar
//import SimpleBar from "simplebar-react";

// import images
import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";
import servicesIcon4 from "../../assets/images/services-icon/04.png";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

// Charts
const LineAreaChart = dynamic(() => import("../AllCharts/apex/lineareachart"),{ssr: false});
const RadialChart = dynamic(() => import("../AllCharts/apex/apexdonut"),{ssr: false});
const Apexdonut = dynamic(() => import("../AllCharts/apex/apexdonut1"),{ssr: false});
const SparkLine = dynamic(() => import("../AllCharts/sparkline/sparkline"),{ssr: false});
const SparkLine1 = dynamic(() => import("../AllCharts/sparkline/sparkline1"),{ssr: false});
const Salesdonut = dynamic(() => import("../AllCharts/apex/salesdonut"),{ssr: false});

const Dashboard = props => {
  // const [menu, setMenu] = useState(false)
  // const toggle = () => {
  //   setMenu(!menu)
  // }
  return (
    <React.Fragment>
       <Layout>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Inicio</h6>
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Bienvenido al panel de control</li>
                </ol>
              </Col>

              <Col md="4">
                <div className="float-end d-none d-md-block">
                  {/* <Dropdown isOpen={menu} toggle={toggle}>
                    <DropdownToggle color="primary" className="btn btn-primary dropdown-toggle waves-effect waves-light">
                      <i className="mdi mdi-cog me-2"></i> Ajustes Rápidos
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem tag="a" href="#">Action</DropdownItem>
                      <DropdownItem tag="a" href="#">Another action</DropdownItem>
                      <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown> */}
                </div>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <Image src={servicesIcon1} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Visitas
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      1,685{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-success">
                      <p className="mb-0">+ 12%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link href="#" className="text-white-50">
                        <a>
                        <i className="mdi mdi-arrow-right h5"></i>
                        </a>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Desde el último mes</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <Image src={servicesIcon2} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Donaciones
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      368{" "}
                      <i className="mdi mdi-arrow-down text-danger ms-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-danger">
                      <p className="mb-0">- 28%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link href="#" className="text-white-50">
                        <a>
                        <i className="mdi mdi-arrow-right h5"></i>
                        </a>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Desde el último mes</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <Image src={servicesIcon3} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Nuevos donadores
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      15{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-info">
                      <p className="mb-0"> 00%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link href="#" className="text-white-50">
                        <a>
                        <i className="mdi mdi-arrow-right h5"></i>
                        </a>
                      </Link>
                    </div>

                    <p className="text-white-50 mb-0 mt-1">Desde el último mes</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat bg-primary text-white">
                <CardBody>
                  <div className="mb-4">
                    <div className="float-start mini-stat-img me-4">
                      <Image src={servicesIcon4} alt="" />
                    </div>
                    <h5 className="font-size-16 text-uppercase mt-0 text-white-50">
                      Proyectos Activos
                    </h5>
                    <h4 className="fw-medium font-size-24">
                      26{" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label bg-warning">
                      <p className="mb-0">+ 84%</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link href="#" className="text-white-50">
                        <a>
                        <i className="mdi mdi-arrow-right h5"></i>
                        </a>
                      </Link>
                    </div>
                    <p className="text-white-50 mb-0 mt-1">Desde el último mes</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={9}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Donativos</h4>
                  <Row>
                    <Col lg={7}>
                      <div>
                        <LineAreaChart />
                      </div>
                    </Col>
                    <Col lg={5}>
                      <Row>
                        <Col md={6}>
                          <div className="text-center">
                            <p className="text-muted mb-4">Este mes</p>
                            <h3>$34,252</h3>
                            <p className="text-muted mb-5">
                              
                            </p>
                            <RadialChart />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="text-center">
                            <p className="text-muted mb-4">Mes pasado</p>
                            <h3>$36,253</h3>
                            <p className="text-muted mb-5">
                             
                            </p>
                            <Apexdonut />
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={3}>
              <Card>
                <CardBody>
                  <div>
                    <h4 className="card-title mb-4">Análisis</h4>
                  </div>
                  <div className="wid-peity mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Online</p>
                          <h5 className="mb-4">1,542</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wid-peity mb-4">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Offline</p>
                          <h5 className="mb-4">6,451</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine1 />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="row">
                      <div className="col-md-6">
                        <div>
                          <p className="text-muted">Marketing</p>
                          <h5>84,574</h5>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <SparkLine />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={3}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Reporte de visitas</h4>
                  <div className="cleafix">
                    <p className="float-start">
                      <i className="mdi mdi-calendar me-1 text-primary"></i> Enero
                      01 - Enero 31
                    </p>
                    <h5 className="font-18 text-end">3,579</h5>
                  </div>
                  <div id="ct-donut" className="ct-chart wid pt-4">
                    <Salesdonut />
                  </div>
                  <div className="mt-4">
                    <table className="table mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <span className="badge bg-primary">Desk</span>
                          </td>
                          <td>Desktop</td>
                          <td className="text-end">54.5%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge bg-success">Mob</span>
                          </td>
                          <td>Mobile</td>
                          <td className="text-end">28.0%</td>
                        </tr>
                        <tr>
                          <td>
                            <span className="badge bg-warning">Tab</span>
                          </td>
                          <td>Tablets</td>
                          <td className="text-end">17.5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Actividades:</h4>
                  <ol className="activity-feed">
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Enero 22</span>
                        <span className="activity-text">
                          Responded to need “Volunteer Activities”
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Enero 20</span>
                        <span className="activity-text">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui deleniti atque...
                          <Link href="#" className="text-success">
                            <a>
                            Read more
                            </a>
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Enero 19</span>
                        <span className="activity-text">
                          Joined the group “Boardsmanship Forum”
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Enero 17</span>
                        <span className="activity-text">
                          Responded to need “In-Kind Opportunity”
                        </span>
                      </div>
                    </li>
                    <li className="feed-item">
                      <div className="feed-item-list">
                        <span className="date">Enero 16</span>
                        <span className="activity-text">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          rem.
                        </span>
                      </div>
                    </li>
                  </ol>
                  <div className="text-center">
                    <Link href="#" className="btn btn-primary">
                      <a>
                      Cargar más
                      </a>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={5}>
              <Row>
                <Col md={6}>
                  <Card className="text-center">
                    <CardBody>
                      <div className="py-4">
                        <i className="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>

                        <h5 className="text-primary mt-4">Ordenes completadas</h5>
                        <p className="text-muted">
                          Mira las últimas donaciones completadas
                        </p>
                        <div className="mt-4">
                          <Link href="" className="btn btn-primary btn-sm">
                            <a>
                            Ver más
                            </a>
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                
              </Row>
              <Row>
                <Col md={12}>
                  <Card>
                    <CardBody>
                      <h4 className="card-title mb-4">Últimos comentarios</h4>
                      <p className="text-muted mb-3 pb-4">
                        " Everyone realizes why a new common language would be
                        desirable one could refuse to pay expensive translators
                        it would be necessary. "
                      </p>
                      <div className="float-end mt-2">
                        <Link href="#" className="text-primary">
                          <a>
                          <i className="mdi mdi-arrow-right h5"></i>
                          </a>
                        </Link>
                      </div>
                      <h6 className="mb-0">
                        {" "}
                        <Image
                          src={user3}
                          alt=""
                          className="avatar-sm rounded-circle me-2"
                        />{" "}
                        James Athey
                      </h6>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Últimas donaciones</h4>
                  <div className="table-responsive">
                    <table className="table table-hover table-centered table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th scope="col">(#) Id</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Monto</th>
                          <th scope="col" colSpan="2">
                            Estado
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#14256</th>
                          <td>
                            <div>
                              <Image
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "}
                              Philip Smead
                            </div>
                          </td>
                          <td>15/1/2018</td>
                          <td>$94</td>
                          <td>
                            <span className="badge bg-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Edit
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14257</th>
                          <td>
                            <div>
                              <Image
                                src={user3}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "}
                              Brent Shipley
                            </div>
                          </td>
                          <td>16/1/2019</td>
                          <td>$112</td>
                          <td>
                            <span className="badge bg-warning">Pending</span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Edit
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14258</th>
                          <td>
                            <div>
                              <Image
                                src={user4}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "}
                              Robert Sitton
                            </div>
                          </td>
                          <td>17/1/2019</td>
                          <td>$116</td>
                          <td>
                            <span className="badge bg-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Edit
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14259</th>
                          <td>
                            <div>
                              <Image
                                src={user5}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "}
                              Alberto Jackson
                            </div>
                          </td>
                          <td>18/1/2019</td>
                          <td>$109</td>
                          <td>
                            <span className="badge bg-danger">Cancel</span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Edit
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14260</th>
                          <td>
                            <div>
                              <Image
                                src={user6}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "}
                              David Sanchez
                            </div>
                          </td>
                          <td>19/1/2019</td>
                          <td>$120</td>
                          <td>
                            <span className="badge bg-success">
                              Delivered
                            </span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Edit
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">#14261</th>
                          <td>
                            <div>
                              <Image
                                src={user2}
                                alt=""
                                className="avatar-xs rounded-circle me-2"
                              />{" "}
                              Philip Smead
                            </div>
                          </td>
                          <td>15/1/2018</td>
                          <td>$94</td>
                          <td>
                            <span className="badge bg-warning">Pending</span>
                          </td>
                          <td>
                            <div>
                              <Link href="#" className="btn btn-primary btn-sm">
                                <a>
                                Edit
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

export default (Dashboard)
