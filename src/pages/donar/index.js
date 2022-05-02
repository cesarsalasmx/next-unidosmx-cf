import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, FormGroup, Input, Label, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/unidos-mx-logo-pruple.png"
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const Donar = (props) => {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
      }, []);
   return (
      <Layout pageTitle="Unidos mx - Crowdfunding">
         <div className="checkout_content">
            <div className="checkout_header text-center">
            <Link href="/">
                  <a className="checkout_Logo_btn"><Image src={logo} className="mx-auto d-block" width={120} height={40} /></a>
            </Link>
            </div>
            <div className="checkout_main">
                <Form action="/api/checkout_sessions" method="POST">
               <Container>
                <Row>
                   <Col md="6" className="checkout_form checkout_user_data">
                       
                           <FormGroup>
                           <Label>Nombre: <span className="inputRequired">*</span></Label>
                           <Input 
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Nombre"
                           />
                           <Label>Apellidos: <span className="inputRequired">*</span></Label>
                           <Input 
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Apellidos"
                           />
                           </FormGroup>
                           <FormGroup>
                           <Label>Correo electrónico: <span className="inputRequired">*</span></Label>
                           <Input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Correo electrónico"
                           />
                           <Label>Contraseña: <span className="inputRequired">*</span></Label>
                           <Input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Contraseña"
                           />
                           </FormGroup>
                           <FormGroup>
                               <Label>Localidad / Ciudad: <span className="inputRequired">*</span></Label>
                               <Input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="Localidad / Ciudad"
                               />
                               <Label>Código postal: <span className="inputRequired">*</span></Label>
                               <Input
                                type="text"
                                name="cp"
                                id="cp"
                                placeholder="Código postal"
                               />
                           </FormGroup>
                   </Col>
                   <Col md="5" className="checkout_form checkout_donation">
                        <FormGroup>
                            <Label>Cantidad a donar: <span className="inputRequired">*</span></Label>
                            <Input
                                type="number"
                                name="PRICE_ID"
                                id="PRICE_ID"
                                placeholder="Donación"
                            />
                            <Label>¿Quieres dejar un mensaje?</Label>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                placeholder="Mensaje"
                            />
                        </FormGroup>
                        <div className="checkout_cause">
                            <Label>Donativo a la causa:  <span className="checkout_cause_label">{"Sonrie"}</span></Label>
                        </div>
                        <FormGroup>
                            <Button type="submit" role="link" className="checkout_submit">Donar</Button>
                        </FormGroup>
                   </Col>
                   </Row>
               </Container>
            </Form>
            </div>
                <div className="site-footer__bottom">
                    <div className="container text-center">
                        <p>© UnidosMX. 2022</p>
                    </div>
                </div>
            
         </div>
      </Layout>
    );
};
export default Donar;