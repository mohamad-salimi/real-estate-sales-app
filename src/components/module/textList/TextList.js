import React from "react";
// Styles
import styles from "./TextList.module.scss";
// Icons
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const TextList = ({ title, profileData, setProfileData, type }) => {
  const handleAdd = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const handleDelete = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((i, index) => (
        <div className={styles.card} key={index}>
          <input
            type="text"
            value={i}
            onChange={(e) => handleChange(e, index)}
          />
          <button onClick={() => handleDelete(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={handleAdd}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default TextList;
