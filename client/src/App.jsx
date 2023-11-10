import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <nav>
          <a href="/">Home</a>
          <a href="/Login">Login</a>
          <a href="/Signup">Signup</a>
          <a href="/Tutors">Tutors</a>
        </nav>
        <Outlet />
      </ApolloProvider>
    </>
  );
}

export default App;
