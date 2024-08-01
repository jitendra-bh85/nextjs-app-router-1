import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-white border-b drop-shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={"/logo.png"} width={140} height={20} alt="" />
        <ul className="flex gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>

        <div>
          <ul className="flex gap-4">
            <li>Login</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
