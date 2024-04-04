import React from "react";
import styles from "./Statistcs.module.scss";
export default function Statictcs() {
  return (
    <div className={styles.statictcs}>
      <h1>خدمة الإحصائيات</h1>
      <p>
        وهي خدمة تستطـــيع من خلالها الإطـــلاع علــــى جميــــع احصائيات
        المنافســــات المتعلقــــة بنشـــاط الشركة
      </p>
      <button>طلب الخدمة</button>
    </div>
  );
}
