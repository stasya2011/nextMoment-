"use client";
import { ILink } from "@/types";
import NavLink from "./navLink/NavLink";
import React from "react";
import styles from "./links.module.scss";

const links: ILink[] = [
  {
    href: "/",
    title: "Homepage",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/blog",
    title: "Blog",
  },
];

const Links = () => {
  return (
    <nav className={styles.nav}>
      {links.map((link: ILink) => (
        <NavLink link={link} key={link.title} />
      ))}
    </nav>
  );
};

export default Links;
