import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignUpPage from "@/template/signUpPage/SignUpPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignUpPage />;
};

export default SignUp;
