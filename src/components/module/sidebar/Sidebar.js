import React from "react";
import Link from "next/link";
// Styles
import styles from "./Sidebar.module.scss";
// Icon
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constans/strings";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href={"/buy-residential"}>همه</Link>
      {Object.keys(categories).map((item, index) => (
        <Link
          key={`SORTING_${index}`}
          href={{
            pathname: "/buy-residential",
            query: { category: item },
          }}
        >
          {categories[item]}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
