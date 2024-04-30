"use client";

import React, { useEffect, useState } from "react";
// Styles
import styles from "./AddProfilePage.module.scss";
// Components
import TextInput from "@/module/textInput/TextInput";
import RadioList from "@/module/radioList/RadioList";
import TextList from "@/module/textList/TextList";
import CustomDatePicker from "@/module/customDatePicker/CustomDatePicker";
import Loader from "@/module/loader/Loader";
// Toast
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddProfilePage = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    amenities: [],
    rules: [],
  });

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const textInputOptions = [
    { title: "عنوان آگهی", name: "title" },
    { title: "توضیحات", name: "description", textarea: true },
    { title: "آدرس", name: "location" },
    { title: "شماره تماس", name: "phone" },
    { title: "قیمت (تومان)", name: "price" },
    { title: "بنگاه", name: "realState" },
  ];

  const textListOptions = [
    { title: "امکانات", type: "amenities" },
    { title: "قوانین", type: "rules" },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.push("/dashboard/my-profiles");
    }
  };

  const handleEdit = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.push("/dashboard/my-profiles");
    }
  };

  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      {textInputOptions.map((input) => (
        <TextInput
          key={input.name}
          title={input.title}
          name={input.name}
          profileData={profileData}
          setProfileData={setProfileData}
          {...(input.textarea ? { textarea: true } : {})}
        />
      ))}
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      {textListOptions?.map((item) => (
        <TextList
          key={item.title}
          title={item.title}
          type={item.type}
          profileData={profileData}
          setProfileData={setProfileData}
        />
      ))}
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={handleEdit}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={handleSubmit}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
};

export default AddProfilePage;
