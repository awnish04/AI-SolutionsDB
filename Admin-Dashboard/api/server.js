// require("dotenv").config();
// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const typeDefs = require("./graphql/schema");
// const resolvers = require("./graphql/resolvers");

// const app = express();
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Failed to connect to MongoDB:", error));

// // Apollo Server setup
// const server = new ApolloServer({ typeDefs, resolvers });

// // Start the Apollo Server and apply middleware
// const startServer = async () => {
//   await server.start(); // Ensure server starts before applying middleware
//   server.applyMiddleware({ app }); // Apply GraphQL middleware to Express app

//   // Start the Express server
//   app.listen(5001, console.log("Server is running on PORT "));
//   app.use("/", (req, res) => {
//     res.send("Server running");
//     console.log("Server running on http://localhost:5001");
//   });
// };

// // Initialize the server
// startServer();

require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const app = express();
// app.use(cors());
const allowedOrigins = process.env.ALLOWED_ORIGIN.split(",");
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB:", error));

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app }); // Apply GraphQL middleware to the Express app
};

// Start server and export for Vercel
startServer();
app.get("/", (req, res) => res.send("GraphQL API running"));

module.exports = app; // Export for Vercel

// const { ApolloServer } = require("apollo-server-micro");
// const mongoose = require("mongoose");
// const typeDefs = require("./schema");
// const resolvers = require("./resolvers");

// require("dotenv").config();

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Failed to connect to MongoDB:", error);
//   });

// // Apollo Server setup
// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const startServer = apolloServer.start();

// module.exports = async (req, res) => {
//   await startServer;
//   await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
// };

// // Required for Vercel serverless functions
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// /api/graphql.js

// const { ApolloServer } = require("apollo-server-micro");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const typeDefs = require("./schema"); // Adjust path if necessary
// const resolvers = require("./resolvers"); // Adjust path if necessary

// require("dotenv").config();

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Failed to connect to MongoDB:", error));

// // CORS setup
// const corsOptions = {
//   origin: "*", // Allow all origins for testing, use specific URLs for production (e.g., 'https://yourfrontend.com')
//   methods: ["GET", "POST", "OPTIONS"], // Allow GET, POST, and OPTIONS methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow headers like Content-Type and Authorization
// };

// // Apollo Server setup with CORS headers and plugins
// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   plugins: [
//     {
//       requestDidStart: () => ({
//         willSendResponse({ response }) {
//           response.http.headers.set("Access-Control-Allow-Origin", "*");
//           response.http.headers.set(
//             "Access-Control-Allow-Methods",
//             "POST, OPTIONS"
//           );
//           response.http.headers.set(
//             "Access-Control-Allow-Headers",
//             "Content-Type, Authorization"
//           );
//         },
//       }),
//     },
//   ],
// });
// console.log("MONGO_URI:", process.env.MONGO_URI);
// console.log("GraphQL Endpoint:", process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

// const startServer = apolloServer.start();

// module.exports = async (req, res) => {
//   await startServer;
//   await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
// };

// // Required for Vercel serverless functions
// export const config = {
//   api: {
//     bodyParser: false, // Disable default body parser to handle raw POST body
//   },
// };
