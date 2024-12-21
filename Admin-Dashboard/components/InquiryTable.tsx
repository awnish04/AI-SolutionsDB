"use client";

import React from "react";

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

interface InquiryTableProps {
  inquiries: Inquiry[];
}

const InquiryTable = ({ inquiries }: InquiryTableProps) => {
  return (
    <div className="relative px-6  flex flex-col w-full max-h-max overflow-scroll text-slate-300  shadow-md bg-clip-border">
      <table className="w-full text-left table-auto min-w-max ">
        <thead>
          <tr>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">ID</th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">Name</th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Email
            </th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Phone
            </th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Company
            </th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Country
            </th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Job Title
            </th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Job Details
            </th>
            <th className="p-4 border-b border-slate-600 bg-[#111313]">
              Message
            </th>
          </tr>
        </thead>
        <tbody>
          {inquiries.length > 0 ? (
            inquiries.map((inquiry) => (
              <tr
                key={inquiry.id || Math.random()}
                className="hover:bg-[#111313]"
              >
                <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
                  <p className="text-sm text-slate-100 font-semibold">
                    {inquiry.id || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-white/20">
                  <p className="text-sm text-slate-300">
                    {inquiry.name || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
                  <p className="text-sm text-slate-300">
                    {inquiry.email || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-white/20">
                  <p className="text-sm text-slate-300">
                    {inquiry.phoneNumber || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
                  <p className="text-sm text-slate-300">
                    {inquiry.companyName || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-white/20">
                  <p className="text-sm text-slate-300">
                    {inquiry.country || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
                  <p className="text-sm text-slate-300">
                    {inquiry.jobTitle || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-white/20">
                  <p className="text-sm text-slate-300">
                    {inquiry.jobDetails || "N/A"}
                  </p>
                </td>
                <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
                  <p className="text-sm text-slate-300">
                    {inquiry.message || "N/A"}
                  </p>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="p-4 text-center bg-[#111313]">
                <p className="text-sm text-slate-300">No inquiries found.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryTable;
