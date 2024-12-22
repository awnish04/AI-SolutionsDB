const mongoose = require("mongoose");
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  companyName: String,
  country: String,
  jobTitle: String,
  jobDetails: String,
  message: String,
});

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
