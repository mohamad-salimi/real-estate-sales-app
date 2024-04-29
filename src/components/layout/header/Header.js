import React from "react";
import Link from "next/link";
// Icons
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
// Styles
import styles from "./Header.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Header = async () => {
  const session = await getServerSession(authOptions);
  return (
    <header className={styles.header}>
      <div className={styles.header_right_section}>
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
      {session ? (
        <div className={styles.login}>
          <Link href="./dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="./signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
