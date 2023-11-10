import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});
import { MainHeader } from "./components/MainHeader/index1";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <MainHeader />
        <Outlet />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
