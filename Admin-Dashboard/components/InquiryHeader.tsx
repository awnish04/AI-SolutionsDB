"use client";

import React, { ChangeEvent } from "react";
import Heading from "@/components/heading";
import { BookOpenCheck } from "lucide-react";

interface InquiryHeaderProps {
  searchQuery: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InquiryHeader = ({ searchQuery, onSearchChange }: InquiryHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <Heading
        title="Customer Inquiries"
        description="An overview of all the inquiries data."
        icon={BookOpenCheck}
        iconColor="text-white"
        textColor="text-white"
      />
      <div className="ml-3">
        <div className="w-full max-w-sm min-w-[200px] relative">
          <div className="relative">
            <input
              className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="Search for inquiries..."
              value={searchQuery}
              onChange={onSearchChange}
            />
            <button
              className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-8 h-8 text-slate-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryHeader;
