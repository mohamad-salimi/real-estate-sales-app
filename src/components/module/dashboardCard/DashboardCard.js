"use client";

import React from "react";
// Styles
import styles from "./DashboardCard.module.scss";
// Card
import Card from "../card/Card";
// Icons
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const DashboardCard = ({ data }) => {
  const handleEdit = () => {};
  const handleDelete = () => {};
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
    </div>
  );
};

export default DashboardCard;
