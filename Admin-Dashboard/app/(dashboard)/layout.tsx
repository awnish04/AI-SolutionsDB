import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-[#111313] flex flex-col md:flex-row max-w-full">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-white/20">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 md:pl-72 overflow-x-hidden">
        {/* <Navbar /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
