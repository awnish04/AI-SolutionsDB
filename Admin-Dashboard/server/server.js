require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connect } from "mongoose";
import cors from "cors";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const app = express();
app.use(cors());

// MongoDB connection
connect(process.env.MONGO_URI, {
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
const startServer = async () => {
  await server.start(); // Ensure server starts before applying middleware
  server.applyMiddleware({ app }); // Apply GraphQL middleware to Express app

  // Start the Express server
  app.listen(5001, () => {
    console.log("Server running on http://localhost:5001");
  });
};

// Initialize the server
startServer();
