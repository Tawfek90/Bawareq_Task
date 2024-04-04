"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { HiBars3 } from "react-icons/hi2";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className=" flex sticky top-0 z-20 py-3 px-8 justify-between items-center bg-[#f8f9fa]"
        style={{ direction: "ltr" }}
      >
        {/*bars */}
        <div className={styles.bars}>
          <HiBars3
            className={`${styles.icon} `}
            onClick={() => setOpen(!open)}
          />
        </div>
        {/*regestiration */}
        <div className={styles.regestiration}>
          <FaRegUserCircle className=" text-[40px] text-[#235A86]" />
          <button className={styles.Regestir}>التسجيل</button>
        </div>
        {/*list */}
        <ul className={styles.list}>
          <li className={styles.item}>عن منافسات</li>
          <li className={styles.item}>خدمة الاحصائيات</li>
          <li className={styles.item}> خدمة التنبيهات</li>
        </ul>
        {/*logo */}
        <div className="logo">
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            className=" w-auto"
            alt="logo"
          />
        </div>
      </nav>
      {/*small list */}
      {open && (
        <div className={styles.small}>
          <ul>
            <li className={styles.item}>عن منافسات</li>
            <li className={styles.item}>خدمة الاحصائيات</li>
            <li className={styles.item}>خدمة التنبيهات</li>
            <div className="small_register flex items-center justify-center my-8">
              <FaRegUserCircle className=" text-[40px] text-[#235A86]" />
              <button
                className={
                  "bg-gradient-to-r from-[#1F638B] to-[#049CA8] ml-8 text-[#FFF]  text-[24px]  rounded-[23px] py-1 px-4 w-[160px] cursor-pointer"
                }
              >
                التسجيل
              </button>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
