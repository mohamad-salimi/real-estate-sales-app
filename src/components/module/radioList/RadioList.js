import React from "react";
// Styles
import styles from "./RadioList.module.scss";

const RadioList = ({ profileData, setProfileData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const radioOptions = [
    { id: "villa", label: "ویلا" },
    { id: "apartment", label: "آپارتمان" },
    { id: "store", label: "مغازه" },
    { id: "office", label: "دفتر" },
  ];

  return (
    <div className={styles.container}>
      <p>دسته‌بندی</p>
      <div className={styles.main}>
        {radioOptions.map((option) => (
          <div key={option.id}>
            <label htmlFor={option.id}>{option.label}</label>
            <input
              type="radio"
              name="category"
              value={option.id}
              id={option.id}
              checked={profileData.category === option.id}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioList;
