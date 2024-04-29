import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProfilesPage from "@/template/myProfilesPage/MyProfilesPage";
import { connectDB } from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";

const MyProfiles = async () => {
  await connectDB;
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session?.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "user",
        localField: "_id,",
        as: "profiles",
      },
    },
  ]);
  return <MyProfilesPage profiles={user.profiles} />;
};

export default MyProfiles;
