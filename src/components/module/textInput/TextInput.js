import React from "react";
// Styles
import styles from "./TextInput.module.scss";
// Utils
import { e2p } from "@/utils/replaceNumber";

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default TextInput;
