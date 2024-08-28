"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const navlinks = [
    {
      name: "Register",
      href: "/signup",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "FORGOT PASSWORD",
      href: "/forgot-password",
    },
  ];
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="border-2 p-4 bg-green-400 flex items-center justify-center">
        {navlinks.map((link, index) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={index}
              className={
                isActive ? "font-bold text-red-800 mr-4" : "text-blue-500 mr-4"
              }
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
};

export default AuthLayout;
