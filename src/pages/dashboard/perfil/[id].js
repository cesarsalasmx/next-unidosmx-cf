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
import {gql, useMutation,useQuery } from "@apollo/client";
const Layout = dynamic(() => import("../../../components/dashboard/VerticalLayout"),{ ssr: false});
const VIEW_USER=gql`
query viewUser($id:ID!){
    UserQuery(id:$id){
      id,
      first_name,
      last_name,
      username,
      email,
      password,
      date_registration,
      birthday,
      id_gender,
      status,
      id_role,
      country,
  }}
`; 
const UPDATE_USER=gql`
mutation UpdatePost(
  $id: ID!,
  $date: Date!,
  $content: String!,
  $slug: String!,
  $title: String!,
  $image: String!,
  $category: String!,
){
  UpdatePostMutation(
    id: $id,
    date: $date,
    content: $content,
    slug: $slug,
    title: $title,
    image: $image,
    category: $category,
  ){
    id
  }
}
`;
const DELETE_USER=gql`
mutation DeletePost($id: ID!){
  DeletePostMutation(
    id: $id,
  ){
    id
  }
}
`

const Dashboard = props => {
  const router = useRouter();
  const { query: { id } } = useRouter();
  // GraphQL
  const { data, loading } = useQuery(VIEW_USER,{variables:{id}});
  const [ updateCause, {mutationData, mutationLoading, mutationError, mutationReset} ] = useMutation(UPDATE_USER,{
    onCompleted:() => {
      toggle("success");
    },
    onError: ()=> {
      toggle("error");
    }
  });
  const [ deleteCause, {deleteData, deleteLoading, deleteError, deleteReset}] = useMutation(DELETE_USER,{
    onCompleted:()=>{
      router.push(`/dashboard/proyectos`);
    },
    onError:()=>{
      toggle("error");
    }
  });
  //States
  const [modalResult, setModalResult] = useState("success");
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);

  let variables= {};
  if (!loading){
    variables = {
        "id": data.UserQuery.id,
        "first_name": data.UserQuery.first_name,
        "last_name": data.UserQuery.last_name,
        "username": data.UserQuery.username,
        "email": data.UserQuery.email,
        "password": data.UserQuery.password,
        "date_registration": data.UserQuery.date_registration,
        "birthday": data.UserQuery.birthday,
        "id_gender": data.UserQuery.id_gender,
        "status": data.UserQuery.status,
        "id_role": data.UserQuery.id_role,
        "country": data.UserQuery.country,
    };
  }
  const handleEditButton = ()=>{
    setIsEdit(!isEdit)
  }
  const modalContent = {
    "success": {
      title: "Causa Actualizada",
      body: "La publicación actualizó exitosamente y está lista para recibir donaciones.",
      cta: "Ver publicación",
      action: () => {
        router.push(`/causas/${variables.slug}`);
      },
    },
    "error": {
      title: "Error",
      body: "Hubo un error. Verifica los datos e intentalo de nuevo.",
      cta: "Volver a intentarlo",
      action:() => {
        reset();
        toggle();
      },
    },
    "delete": {
      title: "Eliminar Usuario",
      body: "Esta a punto de borrar esata causa. ¿Está seguro?",
      cta: "Eliminar",
      action:() => {
        deleteCause({variables});
      },
    }
  }
  const toggle = (result) => {
    setModalResult(result);
    setModal(!modal);
  }
  const handleFormChange = (event,inputName) => {
    variables[inputName] = event.target.value;
  }
  if (loading) return <div>Loading</div>
  return (
    <React.Fragment>
       <Layout>
      <div className="page-content">
        <Container fluid>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title">Causas - Unidos Mx</h6>
              </Col>
            </Row>
          </div>
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                    <h4 className="card-title mb-4">Publicar para recibir donaciones:</h4>
                    <Form onSubmit={e => {
                      e.preventDefault();
                      updateCause({variables});
                    }}>
                        <FormGroup>
                            <Label className="input_public_post_form">Nombre:</Label>
                            <Input 
                            type="text"
                            name="firsName"
                            placeholder="Nombre:"
                            onChange={(event)=>handleFormChange(event,"first_name")}
                            disabled={!isEdit}
                            defaultValue={variables.first_name}
                            required="required"
                            />
                            <Label className="input_public_post_form">Apellidos:</Label>
                            <Input 
                            type="text"
                            name="lastName"
                            placeholder="Apellidos:"
                            onChange={(event)=>handleFormChange(event,"last_name")}
                            disabled={!isEdit}
                            defaultValue={variables.last_name}
                            required="required"
                            />
                            <Label className="input_public_post_form">Correo electrónico:</Label>
                            <Input 
                            type="text"
                            name="email"
                            placeholder="Correo electrónico:"
                            onChange={(event)=>handleFormChange(event,"email")}
                            disabled={!isEdit}
                            defaultValue={variables.email}
                            required="required"
                            />
                            <Label className="input_public_post_form">Contraseña:</Label>
                            <Input 
                            type="password"
                            name="password"
                            placeholder="Contraseña:"
                            onChange={(event)=>handleFormChange(event,"password")}
                            disabled={!isEdit}
                            defaultValue={variables.password}
                            required="required"
                            />
                            <Label className="input_public_post_form">Fecha de nacimiento:</Label>
                            <Input 
                            type="date"
                            name="birthday"
                            onChange={(event)=>handleFormChange(event,"birthday")}
                            disabled={!isEdit}
                            defaultValue={variables.birthday}
                            required="required"
                            />
                            <Label className="input_public_post_form">Género:</Label>
                            <Input 
                            type="select"
                            name="gender"
                            onChange={(event)=>handleFormChange(event,"gender")}
                            disabled={!isEdit}
                            defaultValue={variables}
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
                            disabled={!isEdit}
                            defaultValue={variables.country}
                            required="required"
                            />
                            {isEdit?<Button type="submit" className="input_public_post_form">Crear usuario</Button>:null}
                        </FormGroup>
                    </Form>
                </CardBody>
              </Card>
            </Col>
            <Col xl={12}>
              <Button onClick={handleEditButton}>Editar</Button>&nbsp;&nbsp;&nbsp;<Button className="warning" onClick={() => toggle("delete")}>Eliminar</Button>
                      
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