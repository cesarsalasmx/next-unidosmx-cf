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
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {gql, useMutation } from "@apollo/client";
const Layout = dynamic(() => import("../../../components/dashboard/VerticalLayout"),{ ssr: false});
const ADD_USER=gql`
mutation AddUser(
  $first_name: String!,
  $last_name: String!,
  $email: String!,
  $password: String!,
  $birthday: Date!,
  $gender: String!,
  $roles: String!,
  $country: String!,
){
  AddUserMutation(
    first_name: $first_name,
    last_name: $last_name,
    email: $email,
    password: $password,
    birthday: $birthday,
    gender: $gender,
    roles: $roles,
    country: $country
  ){
	id
  }
}
`;
// Custom Scrollbar
//import SimpleBar from "simplebar-react";
// import images
const Dashboard = props => {
  const router = useRouter();
  let modalResult = "success";
  let variables = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": "",
    "birthday": "",
    "gender": "Hombre",
    "roles": "Administrador",
    "country": ""
  }
  const modalContent = {
    "success": {
      title: "Usuario Creado",
      body: "El usuario se creo correctamente, desde ahora tiene acceso a la plataforma",
      cta: "Volver al dashboard",
      action: () => {
        router.push(`/dashboard`);
      },
    },
    "error": {
      title: "Error",
      body: "Hubo un error. Verifica los datos e intentalo de nuevo.",
      cta: "Volver a intentarlo",
      action:() => {
        reset();
        toggle();;
      },
    }
  }
  const [modal, setModal] = useState(false);
  const toggle = (result) => {
    modalResult = result;
    setModal(!modal);
  }
  const [ addUser, {data, loading, error, reset} ] = useMutation(ADD_USER,{
    onCompleted:() => {
      toggle("success");
    },
    onError: ()=> {
      toggle("error");
    }
  });
  const handleFormChange = (event,inputName) => {
    variables[inputName] = event.target.value;
  }

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
                    <Form onSubmit={e => {
                      e.preventDefault();
                      addUser({variables});
                    }}>
                        <FormGroup>
                            <Label className="input_public_post_form">Nombre:</Label>
                            <Input 
                            type="text"
                            name="firsName"
                            placeholder="Nombre:"
                            onChange={(event)=>handleFormChange(event,"first_name")}
                            required="required"
                            />
                            <Label className="input_public_post_form">Apellidos:</Label>
                            <Input 
                            type="text"
                            name="lastName"
                            placeholder="Apellidos:"
                            onChange={(event)=>handleFormChange(event,"last_name")}
                            required="required"
                            />
                            <Label className="input_public_post_form">Correo electrónico:</Label>
                            <Input 
                            type="text"
                            name="email"
                            placeholder="Correo electrónico:"
                            onChange={(event)=>handleFormChange(event,"email")}
                            required="required"
                            />
                            <Label className="input_public_post_form">Contraseña:</Label>
                            <Input 
                            type="password"
                            name="password"
                            placeholder="Contraseña:"
                            onChange={(event)=>handleFormChange(event,"password")}
                            required="required"
                            />
                            <Label className="input_public_post_form">Fecha de nacimiento:</Label>
                            <Input 
                            type="date"
                            name="birthday"
                            onChange={(event)=>handleFormChange(event,"birthday")}
                            required="required"
                            />
                            <Label className="input_public_post_form">Género:</Label>
                            <Input 
                            type="select"
                            name="gender"
                            onChange={(event)=>handleFormChange(event,"gender")}
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
                            onChange={(event)=>handleFormChange(event,"country")}
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
      <Modal
          isOpen={modal}
          toggle={toggle}
        >
          <ModalHeader toggle={function noRefCheck(){}}>
            {modalContent[modalResult].title}
          </ModalHeader>
          <ModalBody>
            {modalContent[modalResult].body}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={ modalContent[modalResult].action}
            >
             {modalContent[modalResult].cta}
            </Button>
            {' '}
            <Button onClick={ modalContent[modalResult].action}>
              Ir al dashboard
            </Button>
          </ModalFooter>
        </Modal>
      </Layout>
    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default Dashboard;
