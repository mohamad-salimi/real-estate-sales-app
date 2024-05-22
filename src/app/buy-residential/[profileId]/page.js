import Profile from "@/models/Profile";
import DetailsPage from "@/template/detailsPage/DetailsPage";
import { connectDB } from "@/utils/connectDB";
import React from "react";

const ProfileDetails = async ({ params: { profileId } }) => {
  await connectDB;
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است.</h3>;
  return <DetailsPage data={profile} />;
};

export default ProfileDetails;

export const generateMetadata = async ({ params: { profileId } }) => {
  await connectDB;
  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
    authors: { name: "mohamad salimi" },
  };
};
