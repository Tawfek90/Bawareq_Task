import React from "react";
import styles from "./Platform.module.scss";
import { IoSearchSharp } from "react-icons/io5";
export default function Platform() {
  return (
    <div className={styles.plateform}>
      <h1>البحث في منصة إعتماد</h1>
      <div className={styles.input_container}>
        <IoSearchSharp className=" text-[#000] absolute right-[12px]" />
        <input type="search" name="" id="" />
      </div>
    </div>
  );
}
