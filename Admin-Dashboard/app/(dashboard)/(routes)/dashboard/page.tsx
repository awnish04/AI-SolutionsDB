"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { useRouter } from "next/navigation";
const tools = [
  {
    label: "Customer Inquiries",
    icon: BookOpenCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
    href: "/customer-inquiry",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div className="bg-[#1E2020] h-screen">
      <div className="py-32">
        <div className="mb-4 space-y-4 py-4">
          <h2 className="text-2xl text-white md:text-4xl font-bold text-center">
            Explore the power of AI
          </h2>
          <p className="text-gray-400 font-light text-sm md:text-lg text-center">
            Chat with the smartest AI - Experience the power of AI
          </p>
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4 py-10">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 bg-[#111313] border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold text-white">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-white" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
