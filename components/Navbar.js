import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/user">
          <li>Users</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
