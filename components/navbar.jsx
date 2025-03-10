import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-slate-800">
      <Link className="font-bold text-white" href={"/"}>
        Logo
      </Link>
      <Link className="bg-white p-2 text-black" href={"/addTopic"}>Add Topic</Link>
    </nav>
  );
};
