"use client";

import React from "react";
import Link from "next/link";
// Icons
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
// Styles
import styles from "./Header.module.scss";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  return (
    <header className={styles.header}>
      <div className={styles.header_right_section}>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
