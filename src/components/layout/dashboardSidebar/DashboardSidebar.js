import React from "react";
// Styles
import styles from "./DashboardSidebar.module.scss";
// Icon
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
// Component
import LogoutButton from "@/module/logoutButton/LogoutButton";

const DashboardSidebar = ({ children, email, role }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? "ادمین" : null}
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default DashboardSidebar;
