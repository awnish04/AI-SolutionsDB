

const Inquiry = require("../models/Inquiry");

const resolvers = {
  Query: {
    getInquiries: async () => {
      return await Inquiry.find();
    },
  },
  Mutation: {
    createInquiry: async (
      _,
      {
        name,
        email,
        phoneNumber,
        companyName,
        country,
        jobTitle,
        jobDetails,
        message,
      }
    ) => {
      const newInquiry = new Inquiry({
        name,
        email,
        phoneNumber,
        companyName,
        country,
        jobTitle,
        jobDetails,
        message,
      });
      await newInquiry.save();
      return { message: "Inquiry submitted successfully!" };
    },
  },
};

module.exports = resolvers;


