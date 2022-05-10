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
const ADD_CAUSE=gql`
mutation AddPost(
  $content:String!,
  $title:String!,
  $image:String!,
  $category:String! ){
  AddPostMutation(
      content: $content,
      title: $title,
      image: $image,
      category:$category 
    ){
    slug
  }
}
`;


const Dashboard = props => {
  const router = useRouter();
  let modalResult = "success";
  let slug = "";
  let variables = {
    "content": "",
    "title": "",
    "image": "",
    "category": "",
  }
  const modalContent = {
    "success": {
      title: "Causa creada",
      body: "La publicación creo exitosamente y está lista para recibir donaciones.",
      cta: "Ver publicación",
      action: () => {
        router.push(`/causas/${data.AddPostMutation.slug}`);
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
  // Modal open state
  const [modal, setModal] = useState(false);
  // Toggle for Modal
  const toggle = (result) => {
    modalResult = result;
    setModal(!modal);
  }
  const [ addCause, {data, loading, error, reset} ] = useMutation(ADD_CAUSE,{
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
                      addCause({variables});
                    }}>
                        <FormGroup>
                            <Label className="input_public_post_form">Título</Label>
                            <Input 
                            type="text"
                            name="title"
                            placeholder="Título"
                            onChange={(event)=>handleFormChange(event,"title")}
                            required="required"
                            
                            />
                            <Label className="input_public_post_form">Descripción</Label>
                            <Input 
                            type="textarea"
                            name="content"
                            placeholder="Descripción"
                            onChange={(event)=>handleFormChange(event,"content")}
                            required="required"
                            
                            />
                            <Label className="input_public_post_form">Imagen</Label>
                            <Input 
                            type="file"
                            name="image"
                            onChange={(event)=>handleFormChange(event,"image")}
                            
                            required="required"
                            accept="image/*"
                            />
                            <Label className="input_public_post_form">Categoría</Label>
                            <Input 
                            type="text"
                             name="category"
                            placeholder="categoría"
                            onChange={(event)=>handleFormChange(event,"category")}
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