import React from "react";
import Image from "next/image";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.footer_container}>
        <Image src={"/etimad.svg"} width={100} height={100} alt="etimad" />
        <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        {/*content */}
        <div className={styles.content}>
          <p>جميع الحقوق محفوظة لمنصة إعتماد</p>
          <p>تدعم خدمة منافسات منصة إعتماد</p>
        </div>
        {/*icons_container */}
        <div className={styles.icons_container}>
          <p> Monafsat @</p>
          {/*icons */}
          <div className={styles.icons}>
            <div className={styles.item}>
              <MdEmail />
            </div>
            <div className={styles.item}>
              <FaTwitter />
            </div>
            <div className={styles.item}>
              <RxLinkedinLogo />
            </div>
          </div>
        </div>
        <Image
          src={"/vision.svg"}
          className={styles.vision}
          width={200}
          height={200}
          alt="vision"
        />
      </div>
    </footer>
  );
}
