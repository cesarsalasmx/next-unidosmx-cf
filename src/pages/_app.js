import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/apton-icons.css";
import "../assets/css/animate.min.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "../assets/css/responsive.css";
import "react-modal-video/css/modal-video.min.css";
import "../assets/css/main-login.css";
import "../assets/sass/dashboard/chartist.scss";
import "../assets/sass/dashboard/app.scss"
import "../assets/css/main-login.css";
import ApolloClient from "../services/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
    return (  
      <ApolloProvider client={ApolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
  
    return { ...appProps }
  }
  
  export default MyApp