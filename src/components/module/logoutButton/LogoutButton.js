"use client";

import React from "react";
import { signOut } from "next-auth/react";
// Styles
import styles from "./logoutButton.module.scss";
// Icon
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  return (
    <button className={styles.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogoutButton;
