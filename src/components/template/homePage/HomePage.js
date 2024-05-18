import React from "react";
// Styles
import styles from "./HomePage.module.scss";
// Icons
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
// Components
import CategoryCard from "@/module/categoryCard/CategoryCard";
// Constans
import { services, categories, cities } from "@/constans/strings";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((item, index) => (
              <li key={`SERVICES_${index}`}>
                <FiCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.categories}>
          {Object.keys(categories).map((item, index) => (
            <CategoryCard
              key={`CATEGORIES_${index}`}
              title={categories[item]}
              name={item}
            />
          ))}
        </div>
        <div className={styles.city}>
          <h3>شهرهای پر بازدید</h3>
          <ul>
            {cities.map((item, index) => (
              <li key={`CITY_${index}`}>
                <FaCity />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
