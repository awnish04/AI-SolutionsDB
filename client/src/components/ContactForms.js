import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, PhoneCall, Send } from "lucide-react";
const ContactForms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    country: "",
    jobTitle: "",
    jobDetails: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending your message...");
    try {
      const response = await axios.post("http://localhost:5001/graphql", {
        query: `
          mutation {
            createInquiry(
              name: "${formData.name}",
              email: "${formData.email}",
              phoneNumber: "${formData.phoneNumber}",
              companyName: "${formData.companyName}",
              country: "${formData.country}",
              jobTitle: "${formData.jobTitle}", 
              jobDetails: "${formData.jobDetails}",
              message: "${formData.message}"
            ) {
              message
            }
          }
        `,
      });
      toast.success(response.data.data.createInquiry.message); // Success message
      toast.dismiss(loadingToast); // Dismiss the loading toast
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        country: "",
        jobTitle: "",
        jobDetails: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message"); // Error message
      toast.dismiss(loadingToast); // Dismiss the loading toast
    }
  };

  return (
    <section className="container mbr-fullscreen cid-uuGhZ50C2O">
      <div className="  mx-auto ">
        <div className="relative  flex flex-col rounded-xl bg-transparent">
          <div class="grid md:grid-cols-2 mt-32 mb-32 items-center overflow-hidden rounded-3xl max-w-6xl mx-auto bg-white my-6 font-[sans-serif] shadow-2xl">
            <div class="p-8 bg-white">
              <h2 class="text-3xl font-bold text-black">
                Contact <span class="text-[#4FD6C9] font-semibold">Us</span>
              </h2>
              <p class="text-sm text-gray-500 mt-4 leading-relaxed">
                Have a specific inquiry or looking to explore new opportunities?
                Our experienced team is ready to engage with you.
              </p>

              <form onSubmit={handleSubmit}>
                <div class="space-y-4 mt-8">
                  <div class="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name"
                      class="px-2 py-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                    />
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      class="px-2 py-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                    />
                  </div>

                  <div class="grid grid-cols-2 gap-6">
                    <input
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="Phone No."
                      class="px-2 py-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                    />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Company Name"
                      class="px-2 py-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                    />
                  </div>
                  <div class="grid grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      placeholder="Country"
                      class="px-2 py-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                    />
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      placeholder="Job Title"
                      class="px-2 py-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                    />
                  </div>

                  <textarea
                    name="jobDetails"
                    value={formData.jobDetails}
                    onChange={handleChange}
                    required
                    placeholder="Job Details"
                    class="px-2 pt-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                  ></textarea>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write Message"
                    class="px-2 pt-3 bg-transparent text-gray-700 w-full text-sm border-b focus:border-[#4FD6C9] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="mt-8 flex items-center justify-center text-lg font-bold w-full rounded-full px-6 py-6 tracking-wide text-white btn btn-primary"
                >
                  <Send size={22} className="mr-2" />
                  Send It!
                </button>
              </form>

              <ul class="mt-4 flex flex-wrap justify-center gap-4 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
                <li class="flex items-center text-[#4FD6C9]">
                  <Mail size={22} />

                  <a
                    href="mailto:info@example.com"
                    className="text-current text-sm ml-3"
                  >
                    info@ai_solution.com
                  </a>
                </li>
                <li class="flex items-center text-[#4FD6C9]">
                  <PhoneCall size={22} />

                  <a
                    href="tel:+158996888"
                    className="text-current text-sm ml-3"
                  >
                    +158 996 888
                  </a>
                </li>
              </ul>
            </div>

            <div class="z-10 relative h-full max-md:min-h-[350px]">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63096.419535963454!2d-1.4884828612546723!3d54.89563342369845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e612d8af0739f%3A0x749d6e7d017f03c3!2sSunderland%2C%20UK!5e1!3m2!1sen!2snp!4v1731949551254!5m2!1sen!2snp"
                class="left-0 top-0 h-full w-full  "
                frameborder="0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;
