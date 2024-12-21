// "use client";
// import React, { useEffect, useState, ChangeEvent } from "react";
// import axios from "axios";
// import Heading from "@/components/heading";
// import { VideoIcon, BookOpenCheck } from "lucide-react";
// interface Inquiry {
//   id: string;
//   name: string;
//   email: string;
//   phoneNumber: string;
//   companyName: string;
//   country: string;
//   jobTitle: string;
//   jobDetails: string;
//   message: string;
// }

// const page = () => {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [inquiries, setInquiries] = useState<Inquiry[]>([]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [searchQuery, setSearchQuery] = useState<string>(""); // State to hold the search query

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useEffect(() => {
//     const fetchInquiries = async () => {
//       try {
//         const response = await axios.post("http://localhost:5001/graphql", {
//           query: `
//             query {
//               getInquiries {
//                 id
//                 name
//                 email
//                 phoneNumber
//                 companyName
//                 country
//                 jobTitle
//                 jobDetails
//                 message
//               }
//             }
//           `,
//         });

//         console.log("Fetched inquiries:", response.data.data.getInquiries);
//         setInquiries(response.data.data.getInquiries || []);
//       } catch (error) {
//         console.error("Error fetching inquiries:", error);
//       }
//     };

//     fetchInquiries();
//   }, []);

//   // Function to handle the search query change
//   const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
//     setSearchQuery(event.target.value);
//   };

//   // Filter inquiries based on search query
//   const filteredInquiries = inquiries.filter((inquiry) => {
//     // Ensure inquiry is not null and has the required properties before trying to access them
//     if (!inquiry) return false;

//     const searchText = searchQuery.toLowerCase();
//     return (
//       inquiry.name?.toLowerCase().includes(searchText) ||
//       inquiry.email?.toLowerCase().includes(searchText) ||
//       inquiry.phoneNumber?.toLowerCase().includes(searchText) ||
//       inquiry.companyName?.toLowerCase().includes(searchText) ||
//       inquiry.country?.toLowerCase().includes(searchText) ||
//       inquiry.jobTitle?.toLowerCase().includes(searchText) ||
//       inquiry.jobDetails?.toLowerCase().includes(searchText) ||
//       inquiry.message?.toLowerCase().includes(searchText)
//     );
//   });
//   return (
//     <div className="bg-[#1E2020] pt-4 px-10 shadow-white">
//       <div className="flex justify-between items-center mb-3">
//         <Heading
//           title="Customer Inquiries"
//           description="An overview of all the inquiries data."
//           icon={BookOpenCheck} // You can use any icon from lucide-react
//           iconColor="text-white"
//           textColor="text-white"
//         />

//         <div className="ml-3">
//           <div className="w-full max-w-sm min-w-[200px] relative">
//             <div className="relative">
//               <input
//                 className="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
//                 placeholder="Search for invoice..."
//                 value={searchQuery}
//                 onChange={handleSearch} // Bind the input field to the searchQuery state
//               />
//               <button
//                 className="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded"
//                 type="button"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="3"
//                   stroke="currentColor"
//                   className="w-8 h-8 text-slate-600"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="relative py-10 flex flex-col w-full h-full overflow-scroll text-slate-300 bg-white/20 shadow-md bg-clip-border">
//         <table className="w-full text-left table-auto min-w-max">
//           <thead>
//             <tr>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">ID</th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Name
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Email
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Phone
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Company
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Country
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Job Title
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Job Details
//               </th>
//               <th className="p-4 border-b border-slate-600 bg-[#111313]">
//                 Message
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredInquiries.length > 0 ? (
//               filteredInquiries.map((inquiry) => (
//                 <tr
//                   key={inquiry.id || Math.random()}
//                   className="hover:bg-[#111313]"
//                 >
//                   <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
//                     <p className="text-sm text-slate-100 font-semibold">
//                       {inquiry.id || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-white/20">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.name || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.email || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-white/20">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.phoneNumber || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.companyName || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-white/20">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.country || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.jobTitle || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-white/20">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.jobDetails || "N/A"}
//                     </p>
//                   </td>
//                   <td className="p-4 border-b border-slate-700 bg-[#1E2020]">
//                     <p className="text-sm text-slate-300">
//                       {inquiry.message || "N/A"}
//                     </p>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={9} className="p-4 text-center bg-[#111313]">
//                   <p className="text-sm text-slate-300">No inquiries found.</p>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default page;

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
