"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import InquiryHeader from "@/components/InquiryHeader";
import InquiryTable from "@/components/InquiryTable";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  country: string;
  jobTitle: string;
  jobDetails: string;
  message: string;
}

const Page = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.post("http://localhost:5001/graphql", {
          query: `
            query {
              getInquiries {
                id
                name
                email
                phoneNumber
                companyName
                country
                jobTitle
                jobDetails
                message
              }
            }
          `,
        });

        setInquiries(response.data.data.getInquiries || []);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchInquiries();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    if (!inquiry || typeof inquiry !== "object") {
      return false; // Skip null, undefined, or non-object entries
    }

    const searchText = searchQuery.toLowerCase();
    return (
      (inquiry.name?.toLowerCase() || "").includes(searchText) ||
      (inquiry.email?.toLowerCase() || "").includes(searchText) ||
      (inquiry.phoneNumber?.toLowerCase() || "").includes(searchText) ||
      (inquiry.companyName?.toLowerCase() || "").includes(searchText) ||
      (inquiry.country?.toLowerCase() || "").includes(searchText) ||
      (inquiry.jobTitle?.toLowerCase() || "").includes(searchText) ||
      (inquiry.jobDetails?.toLowerCase() || "").includes(searchText) ||
      (inquiry.message?.toLowerCase() || "").includes(searchText)
    );
  });

  return (
    <div className="flex-1 pl-72 overflow-x-hidden bg-[#111313] border-t-2 border-b-2 border-white/20 fixed top-0 left-0 w-full z-50">
      <div className="bg-[#1E2020] p-4 shadow-white">
        <InquiryHeader
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
        />
      </div>
      <div className="flex w-full justify-end ">
        <InquiryTable inquiries={filteredInquiries} />
      </div>
    </div>
    // <div className="bg-[#1E2020] pt-4 px-10 shadow-white">
    //   <InquiryHeader searchQuery={searchQuery} onSearchChange={handleSearch} />
    //   <InquiryTable inquiries={filteredInquiries} />
    // </div>
  );
};

export default Page;