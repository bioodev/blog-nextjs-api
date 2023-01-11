import React from "react";
import Link from "next/link";
import "./Navbar.module.css"

const Navbar = () => {
  const links = [
    { label: "Home", route: "/", icon:"💎" },
    { label: "Posts", route: "/posts", icon:"📄" },
    { label: "About", route: "/about", icon:"💻" },
  ];
  return (
    <>
      <nav className="container">
        <ul className="navlist">
          {links.map(({ label, route, icon }) => (
            <li key={route}>
              <Link href={route}>{icon} {label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
