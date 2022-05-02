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
import "../assets/css/main-login.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";

const client = new ApolloClient({
    uri: "http://164.92.217.65/",
    cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
    return (  
      <ApolloProvider client={client}>
        <>
          <Component {...pageProps} />
        </>
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