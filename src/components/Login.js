import React, { useEffect, useState } from "react";
import {Form, Button, FormGroup, Label, Input } from "reactstrap";
import logoSm from "../assets/images/unidos-mx-logo-pruple.png";
import loginImg from "../assets/images/resources/login-img.png";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import {gql, useMutation} from "@apollo/client";
const LOGIN = gql`
mutation loginUser($email: String!,$password: String!){
  loginUserMutation(email: $email ,password:$password){
    success,
    message,
    token
  }
}
`;
const Login = () => {
  const router = useRouter();
  const [loginUser, {data,loading,errors,reset}] = useMutation(LOGIN);
  useEffect(()=> {
    if(data){
      setErrorMessage(data.loginUserMutation.message)
      if(data.loginUserMutation.success){
        localStorage.setItem('token',data.loginUserMutation.token);
        router.push(`/dashboard`);
      }
    }

  },[data]);
  const [errorMessage, setErrorMessage ] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const [isAuthenticated, setIsAuthenticated] = useState(()=>{
    const token = null;
    if (typeof window !== "undefined") {
      token = localStorage.getItem('token');
    }
    let isLogin = true
    try{
      isLogin = decode(token);
    }catch(e){
      return false
    }
    return isLogin
  });
  useEffect(()=>{
    if(isAuthenticated){
      Router.push('/dashboard')
    }
  },[]);
  return (
    <div className="form-body">
      <div className="website-logo">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={logoSm} width="200px" alt="Logo Proyecto Unidos MX" />
            </a>
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
              <h3>Iniciar Sesión</h3>
              <div className="page-links">
                <Link href="#none" className="active">
                  <a>Iniciar Sesión</a>
                </Link>
                <Link href="/registro"><a>Registro</a></Link>
              </div>
              <Form onSubmit={(e) => {
                e.preventDefault();
                loginUser({variables:{email,password}});
              }}>
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
                >
                  Iniciar Sesión
                </Button>
              </Form>
            <div>
              {errorMessage ? <div className="message_error"> {errorMessage} </div> : null}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
