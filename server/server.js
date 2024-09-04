const express = require("express");
const db = require("./config/connection");
const { ApolloServer } = require("@apollo/server");
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const { expressMiddleware } = require("@apollo/server/express4");

//initialize app and set port
const PORT = process.env.PORT || 8000;
const app = express();

//initialize apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//server startign function
const startApollo = async () => {
  //checks if environment is in production mode
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
    });
  }

  //middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  server.start().then(() => {
    // Connect to MongoDB
    app.use("/graphql", expressMiddleware(server));
    db.once("open", () => {
      // Start the Express server
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  });
};
startApollo();
