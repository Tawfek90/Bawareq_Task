import React from "react";
import styles from "./Alerts.module.scss";
export default function Alerts() {
  return (
    <div className={styles.Alerts}>
      <h1>خدمة التنبيهات</h1>
      <p>
        وهي خدمة تمكنك من تصنيف النشاطات والجهات الحكومية وتسمح للمستخدم باستلام
        الرسائل التذكيرية للمنافسات الجديده وغيرها
      </p>
      <button>طلب الخدمة</button>
    </div>
  );
}
