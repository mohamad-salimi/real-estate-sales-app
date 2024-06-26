"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Styles
import styles from "./AdminCard.module.scss";
// Helper
import { sp } from "@/utils/replaceNumber";
// Toast
import toast, { Toaster } from "react-hot-toast";

const AdminCard = ({ data: { _id, title, description, location, price } }) => {
  const router = useRouter();
  const handlePublish = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={handlePublish}>انتشار</button>
      <Toaster />
    </div>
  );
};

export default AdminCard;
