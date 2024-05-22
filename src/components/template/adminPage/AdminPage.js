import React from "react";
// Styles
import styles from "./AdminPage.module.scss";
// Component
import AdminCard from "@/module/adminCard/AdminCard";

const AdminPage = ({ profiles }) => {
  return (
    <div>
      {profiles?.length > 0 ? (
        profiles.map((item, index) => (
          <AdminCard
            key={`ADMIN_CARD_${index}`}
            data={JSON.parse(JSON.stringify(item))}
          />
        ))
      ) : (
        <p className={styles.text}>هیج آگهی در انتظار تاییدی وجود ندارد</p>
      )}
    </div>
  );
};

export default AdminPage;
