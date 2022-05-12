import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout";
import { Container, Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import logo from "../../assets/images/unidos-mx-logo-pruple.png"
import { loadStripe } from '@stripe/stripe-js';
import decode from 'jwt-decode';
import {gql, useMutation, useQuery } from "@apollo/client";
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
const ADD_DONATION = gql`
mutation addDonation(
    $user_id: Int!,
    $post_id: Int!,
    $amount: String! 
  ){
    AddDonationMutation(
      user_id: $user_id,
      post_id: $post_id,
      amount: $amount
    ){
      id
    }
  }`;
const VIEW_USER = gql`
mutation ViewUser($id:Int!){
    ViewUser(id:$id){
      id,
      first_name,
      last_name,
      email,
      country,
      birthday,
      value,
    }
  }`;
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Donar = (props) => {
    const { query: { post_id } } = useRouter();
    const [ addUser, { data: addUserdata, loading:addUserloading, error:addUsererror,  reset:addUserreset} ] = useMutation(ADD_USER);
    const [ addDonation, { data: dataDonation, loading:loadingDonation, error:errorDonation,  reset:resetDonation} ] = useMutation(ADD_DONATION);
    const [getViewUser, { data: viewUserdata, loading:viewUserloading, error:viewUserError, reset:viewUserReset} ] = useMutation(VIEW_USER);
    const [userID , setUserID ] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(()=>{
        const token = null;
        if (typeof window !== "undefined") {
            token = localStorage.getItem('token');
        }
        let isLogin = true
        try{
            isLogin = decode(token);
            let { user } = isLogin;
            setUserID(user);
        }catch(e){
            return isLogin
        }
        return isLogin
    });
    
    useEffect(()=>{
        if(userID){
            console.log(userID)
            getViewUser({variables:{id:userID}})
            // console.log(viewUserData, viewUserLoading);
        }
    },[userID]);

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        country: '',
        gender:'Hombre',
        roles:'Donante',
    });
    const [donationData, setDonationData] = useState({
        amount: '$100.00',
        message: '',
        post_id,
        user_id: userID

    });
    
    const handleFormChange = (event,field) => {
        setUserData({
            ...userData,
            [field] : event.target.value
        })
    }
    const handleInputDonationChange = (event,field) => {
        setDonationData({
            ...donationData,
            [field] : event.target.value
        })
    }
    const handleSubmitCheckoutForm = async() => {
        if(!viewUserdata) {
          await addUser({variables:userData});
          if(addUserloading){
            await setUserID(addUserdata.AddUserMutation.id)
          }console.log(userID)
        }
        await addDonation({variables:donationData});
        
    }
    if(isAuthenticated && viewUserloading) return (<div>Loading</div>)
   return (
      <Layout pageTitle="Unidos mx - Crowdfunding">
         <div className="checkout_content">
            <div className="checkout_header text-center">
            <Link href="/">
                  <a className="checkout_Logo_btn"><Image src={logo} className="mx-auto d-block" width={120} height={40} /></a>
            </Link>
            </div>
            <div className="checkout_main">
                <Form onSubmit={(e)=>{
                  e.preventDefault();   
                  console.log(userData,donationData)

                  if(!viewUserdata)  addUser({variables:userData});
                     addDonation({variables:{donationData}});
                }}>
               <Container>
                <Row>
                   <Col md="6" className="checkout_form checkout_user_data">
                   <FormGroup>
                            <Label className="input_public_post_form">Nombre:</Label>
                            <Input 
                            type="text"
                            name="firs_name"
                            placeholder="Nombre:"
                            onChange={(event)=>handleFormChange(event,"first_name")}
                            required="required"
                            defaultValue={viewUserdata?viewUserdata.ViewUser.first_name:null}
                            disabled={viewUserdata?true:false}
                            />
                            <Label className="input_public_post_form">Apellidos:</Label>
                            <Input 
                            type="text"
                            name="last_name"
                            placeholder="Apellidos:"
                            onChange={(event)=>handleFormChange(event,"last_name")}
                            required="required"
                            defaultValue={viewUserdata?viewUserdata.ViewUser.last_name:null}
                            disabled={viewUserdata?true:false}
                            />
                            <Label className="input_public_post_form">Correo electrónico:</Label>
                            <Input 
                            type="text"
                            name="email"
                            placeholder="Correo electrónico:"
                            onChange={(event)=>handleFormChange(event,"email")}
                            required="required"
                            defaultValue={viewUserdata?viewUserdata.ViewUser.email:null}
                            disabled={viewUserdata?true:false}
                            />
                            {!viewUserdata?<>
                            <Label className="input_public_post_form">Contraseña:</Label>
                            <Input 
                            type="password"
                            name="password"
                            placeholder="Contraseña:"
                            onChange={(event)=>handleFormChange(event,"password")}
                            required="required"
                            /></>
                            :null}
                            <Label className="input_public_post_form">Fecha de nacimiento:</Label>
                            <Input 
                            type="date"
                            name="birthday"
                            onChange={(event)=>handleFormChange(event,"birthday")}
                            required="required"
                            defaultValue={viewUserdata?viewUserdata.ViewUser.birthday:null}
                            disabled={viewUserdata?true:false}
                            />
                            <Label className="input_public_post_form">Género:</Label>
                            <Input 
                            type="select"
                            name="gender"
                            onChange={(event)=>handleFormChange(event,"gender")}
                            required="required"
                            defaultValue={viewUserdata?viewUserdata.ViewUser.value:null}
                            disabled={viewUserdata?true:false}
                            >
                                <option>Hombre</option>
                                <option>Mujer</option>
                                <option>Prefiero no decirlo</option>
                            </Input>
                            <Label className="input_public_post_form">Ciudad:</Label>
                            <Input 
                            type="text"
                            name="country"
                            onChange={(event)=>handleFormChange(event,"country")}
                            required="required"
                            defaultValue={viewUserdata?viewUserdata.ViewUser.country:null}
                            disabled={viewUserdata?true:false}
                            />
                        </FormGroup>
                   </Col>
                   <Col md="5" className="checkout_form checkout_donation">
                        <FormGroup>
                            <Label>Cantidad a donar: <span className="inputRequired">*</span></Label>
                            <Input
                                type="select"
                                name="amount"
                                id="amount"
                                onChange={handleInputDonationChange}
                                required="required"
                            >
                            <option>$100.00</option>
                            <option>$200.00</option>
                            <option>$500.00</option>
                            <option>$1000.00</option>
                            </Input>
                            <Label>¿Quieres dejar un mensaje?</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                onChange={handleInputDonationChange}
                                placeholder="Mensaje"
                            />
                        </FormGroup>
                        <div className="checkout_cause">
                            <Label>Donativo a la causa:  <span className="checkout_cause_label">{"Sonrie"}</span></Label>
                        </div>
                        <FormGroup>
                            <Button type="submit" className="checkout_submit">Donar</Button>
                        </FormGroup>
                   </Col>
                   </Row>
               </Container>
            </Form>
            </div>
                <div className="site-footer__bottom">
                    <div className="container text-center">
                        <p>© UnidosMX. 2022</p> :null 
                    </div>
                </div>
            
         </div>
      </Layout>
    );
};
export default Donar;