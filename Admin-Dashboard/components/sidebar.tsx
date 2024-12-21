"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, BookOpenCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";


const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Customer Inquiries",
    icon: BookOpenCheck,
    href: "/customer-inquiry",
    color: "text-orange-600",
  },
];

const Sidebar = () => {
  const pathname = usePathname(); // Safe to call here
  const { isLoaded, user } = useUser(); // Always call hooks first

  if (!isLoaded || !user) {
    // Handle loading or no user
    return null;
  }

  const updateUser = async () => {
    await user.update({
      firstName: "John",
      lastName: "Doe",
    });
  };

  return (
    <div className="  flex flex-col h-full bg-[#111313] text-white">
      <div className=" flex-1  border-r-2 border-b-2 border-white/20 ">
        <Link
          href="/dashboard"
          className="flex items-center px-4 py-4 border-t-2 border-b-2 border-white/20"
        >
          <div className="relative w-8 h-8 mr-4">
            <Image width={50} height={50} alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            AI Solution
          </h1>
        </Link>
        <div className="space-y-4 px-4 py-4">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-4 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/5 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/20"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer className="px-4 py-4 mt-0 border-b-2 border-l-2 border-r-2 border-white/20">
        <div className="flex space-x-4 w-full text-lg justify-start p-4 rounded-lg border border-white/20">
          <UserButton afterSignOutUrl="/" />
          <span>{user?.firstName}</span>
          
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
