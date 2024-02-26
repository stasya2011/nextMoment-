import classNames from "classnames";
import styles from "./navbar.module.scss";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <header className={classNames(styles.wrapper)}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </header>
  );
};

export default Navbar;
