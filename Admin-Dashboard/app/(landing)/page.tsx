"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="w-max mx-auto p-32">
      {/* Landing Page (Unprotected) */}
      {/* <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div> */}
      <div className="shadow-2xl shadow-slate-900 rounded-lg flex min-h-full  flex-col px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={100}
            height={100}
            alt="Logo"
            src="/logo.png"
            className="mx-auto h-14 w-auto"
          />

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="flex mt-10 gap-20 mx-auto">
          <div>
            <Link href="/sign-in">
              <Button className="w-28">Login</Button>
            </Link>
          </div>

          <div>
            <Link href="/sign-up">
              <Button className="w-28">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
