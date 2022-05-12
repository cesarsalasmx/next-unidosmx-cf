import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from "@apollo/client";

const endpoint = process.env.graphql;
const httpLink = new HttpLink({uri: `http://localhost:4000/graphql`});

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        "x-token": localStorage.getItem('token') || null,
      }
    });
    return forward(operation);
  })
  
  
  const authAfterware = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      const context = operation.getContext();
      const { response: { headers } } = context;
      if (headers) {
        const token = headers.get("x-token");
  
        if (token) {
          localStorage.setItem("token", token);
        }
  
      }
      return response;
    });
  });
  
  
  export default new ApolloClient({
    link: authAfterware.concat(authMiddleware.concat(httpLink)),
    cache: new InMemoryCache()
  });
  