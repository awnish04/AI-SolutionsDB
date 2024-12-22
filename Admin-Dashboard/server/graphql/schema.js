const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Inquiry {
    id: ID!
    name: String!
    email: String!
    phoneNumber: String!
    companyName: String!
    country: String!
    jobTitle: String!
    jobDetails: String!
    message: String!
  }

  type Query {
    getInquiries: [Inquiry]
  }

  type Mutation {
    createInquiry(
      name: String!
      email: String!
      phoneNumber: String!
      companyName: String!
      country: String!
      jobTitle: String!
      jobDetails: String!
      message: String!
    ): InquiryResponse
  }

  type InquiryResponse {
    message: String
  }
`;

module.exports = typeDefs;
