import React from "react";
// Styles
import styles from "./MyProfilesPage.module.scss";
// Components
import DashboardCard from "@/module/dashboardCard/DashboardCard";

const MyProfilesPage = ({ profiles }) => {
  return (
    <div>
      {profiles?.length === 0 ? (
        <p className={styles.text}>هیچ آگهی ثبت نشده است.</p>
      ) : (
        profiles?.map((profile) => (
          <DashboardCard
            key={profile._id}
            data={JSON.parse(JSON.stringify(profile))}
          />
        ))
      )}
    </div>
  );
};

export default MyProfilesPage;
