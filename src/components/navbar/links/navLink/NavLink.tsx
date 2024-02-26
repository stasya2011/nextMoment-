import { ILink } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import styles from "./navLink.module.scss";

const NavLink = ({ link }: { link: ILink }) => {
  const path = usePathname();

  return (
    <Link
      href={link.href}
      className={classNames(
        path === link.href ? styles.active : styles.default
      )}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
