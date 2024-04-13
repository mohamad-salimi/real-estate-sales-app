import React from "react";
import Link from "next/link";
// Icons
import { FiLogIn } from "react-icons/fi";
// Styles
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="./">صفحه اصلی</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <Link href="./signin">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
