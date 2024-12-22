// require("dotenv").config();
// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const typeDefs = require("./graphql/schema");
// const resolvers = require("./graphql/resolvers");

// const app = express();
// app.use(cors());

// // MongoDB connection
// mongoose
//   // .connect("mongodb://localhost:27017/inquiries", {
//   //   useNewUrlParser: true,
//   //   useUnifiedTopology: true,
//   // })
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB", error);
//   });

// // Apollo Server setup
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the Apollo Server and apply middleware
// const startServer = async () => {
//   await server.start(); // Ensure server starts before applying middleware
//   server.applyMiddleware({ app }); // Apply GraphQL middleware to Express app

//   // Start the Express server
//   app.listen(5001, () => {
//     console.log("Server running on http://localhost:5001");
//   });
// };

// // Initialize the server
// startServer();

const { ApolloServer } = require("apollo-server-micro");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

require("dotenv").config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Apollo Server setup
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

module.exports = async (req, res) => {
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
};

// Required for Vercel serverless functions
export const config = {
  api: {
    bodyParser: false,
  },
};
