require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
// app.use(cors());
app.use(
  cors({
    origin: ["https://ai-solutions-db.vercel.app/"],
  })
);

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
    console.error("Failed to connect to MongoDB", error);
  });

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server and apply middleware
// const port = process.env.PORT;
const startServer = async () => {
  await server.start(); // Ensure server starts before applying middleware
  server.applyMiddleware({ app }); // Apply GraphQL middleware to Express app

  // Start the Express server
  // app.listen(port, () => {
  //   console.log("Server running on port ${port}");
  // });
  exports.handler = server.createHandler();
};

// Initialize the server
startServer();
