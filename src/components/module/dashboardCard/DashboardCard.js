"use client";

import React from "react";
import { useRouter } from "next/navigation";
// Styles
import styles from "./DashboardCard.module.scss";
// Card
import Card from "../card/Card";
// Icons
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
// Toast
import toast, { Toaster } from "react-hot-toast";

const DashboardCard = ({ data }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={handleEdit}>
          ویرایش <FiEdit />
        </button>
        <button onClick={handleDelete}>
          حذف آگهی <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
