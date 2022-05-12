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
const Layout = dynamic(() => import("../../../../components/dashboard/VerticalLayout"),{ ssr: false});
const VIEW_CAUSE=gql`
  query view_causes($slug:String!){
    PostQuery(slug:$slug){
      id,
      title,
      content,
      image,
      author,
      date,
      category,
      slug
    }
  }
`; 
const UPDATE_CAUSE=gql`
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
const DELETE_CAUSE=gql`
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
  const { query: { slug } } = useRouter();
  // GraphQL
  const { data, loading } = useQuery(VIEW_CAUSE,{variables:{slug}});
  const [ updateCause, {mutationData, mutationLoading, mutationError, mutationReset} ] = useMutation(UPDATE_CAUSE,{
    onCompleted:() => {
      toggle("success");
    },
    onError: ()=> {
      toggle("error");
    }
  });
  const [ deleteCause, {deleteData, deleteLoading, deleteError, deleteReset}] = useMutation(DELETE_CAUSE,{
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
      "id": data.PostQuery.id,
      "title": data.PostQuery.title,
      "content": data.PostQuery.content,
      "image": data.PostQuery.image,
      "author": data.PostQuery.author,
      "date": data.PostQuery.date,
      "category": data.PostQuery.category,
      "slug": data.PostQuery.slug,
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
      title: "Eliminar Causa",
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
                            <Label className="input_public_post_form">Título</Label>
                            <Input 
                            type="text"
                            name="title"
                            placeholder="Título"
                            defaultValue={variables.title}
                            onChange={(event)=>handleFormChange(event,"title")}
                            required="required"
                            disabled={!isEdit}
                            
                            />
                            <Label className="input_public_post_form">Descripción</Label>
                            <Input 
                            type="textarea"
                            name="content"
                            defaultValue={variables.content}
                            placeholder="Descripción"
                            onChange={(event)=>handleFormChange(event,"content")}
                            required="required"
                            disabled={!isEdit}
                            />
                            <Label className="input_public_post_form">Categoría</Label>
                            <Input 
                            type="text"
                            name="category"
                            defaultValue={variables.category}
                            placeholder="categoría"
                            onChange={(event)=>handleFormChange(event,"category")}
                            required="required"
                            disabled={!isEdit}
                            />
                            <Label className="input_public_post_form">Slug</Label>
                            <Input 
                            type="text"
                            name="slug"
                            defaultValue={variables.slug}
                            placeholder="Slug"
                            onChange={(event)=>handleFormChange(event,"slug")}
                            required="required"
                            disabled={!isEdit}
                            />
                            <Label className="input_public_post_form">Imagen</Label>
                            <Input 
                            type="file"
                            name="image"
                            onChange={(event)=>handleFormChange(event,"image")}
                            required="required"
                            accept="image/*"
                            disabled={!isEdit}
                            />
                            {isEdit? <Button type="submit" className="input_public_post_form">Actualizar</Button> : null } 
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