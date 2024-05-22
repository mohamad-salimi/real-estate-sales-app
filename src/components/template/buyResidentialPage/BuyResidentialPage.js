import React from "react";
// Styles
import styles from "./BuyResidentialPage.module.scss";
// Component
import Card from "@/module/card/Card";
import Sidebar from "@/module/sidebar/Sidebar";

const BuyResidentialPage = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {data?.length === 0 ? (
          <p>هیج آگهی ثبت نشده است.</p>
        ) : (
          data?.map((profile) => <Card key={profile._id} data={profile} />)
        )}
      </div>
    </div>
  );
};

export default BuyResidentialPage;
