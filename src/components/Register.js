import React from "react";
import {Form, Button, Input, FormGroup, Label}  from "reactstrap";
import logoSm from "../assets/images/unidos-mx-logo-pruple.png";
import loginImg from "../assets/images/resources/login-img.png";
import Link from 'next/link';
import Image from 'next/image';
const Register = () => {
  // handleValidSubmit
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="form-body">
      <div className="website-logo">
        <div className="logo">
          <Link href="/">
            <a><Image src={logoSm} width="200px" alt="Logo Proyecto Unidos MX" /></a>
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="img-holder">
          <div className="bg"></div>
          <div className="info-holder">
            <Image src={loginImg} alt="Login IMG" />
          </div>
        </div>
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Registrate y sé parte de Proyecto Unidos MX</h3>
              <div className="page-links">
                <Link href="/iniciar-sesion" >
                  <a>Iniciar Sesión</a>
                </Link>
                <Link href="#none" className="active"><a>Registro</a></Link>
              </div>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Nombre Completo</Label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Correo Electrónico</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Contraseña</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button
                  block
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Registrarme
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
