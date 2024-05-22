import React from "react";
import User from "@/models/User";
import { connectDB } from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardSidebar from "@/layout/dashboardSidebar/DashboardSidebar";
import AdminPage from "@/template/adminPage/AdminPage";
import Profile from "@/models/Profile";

export const metadata = {
  title: "پنل ادمین | پروژه خرید و فروش املاک",
};

const Admin = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB;
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSidebar email={user.email} role={user.role}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  );
};

export default Admin;
