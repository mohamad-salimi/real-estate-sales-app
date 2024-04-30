import Profile from "@/models/Profile";
import AddProfilePage from "@/template/addProfilePage/AddProfilePage";
import { connectDB } from "@/utils/connectDB";
import React from "react";

const Edit = async ({ params: { profileId } }) => {
  await connectDB;
  const profile = await Profile.findOne({ _id: profileId });

  return !profile ? (
    <h3>مشکلی پیش آمده است لطفا دوباره امتحان کنید...</h3>
  ) : (
    <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
  );
};

export default Edit;
