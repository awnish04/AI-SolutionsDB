"use client";
import { UserButton } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-[#111313] border-t-2 border-b-2 border-white/20 fixed top-0 left-0 w-full z-50">
      <div className="bg-[#1E2020] pt-4 px-10 shadow-white">
        
      </div>
      <div className="flex w-full justify-end ">
        
<UserButton/>

      </div>
    </div>
  );
};

export default Navbar;
