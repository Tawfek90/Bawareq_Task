import React from "react";
import styles from "./Pricing.module.scss";
import Image from "next/image";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
export default function Pricings() {
  return (
    <>
      <section className={styles.wrapper}>
        {/*pricing */}
        <div className={styles.pricing}>
          <h2>تسعير</h2>
          <p>قم بالتسجيل والاشتراك بالخدمات فورا</p>
          <h1>مجاناً</h1>
          {/*list */}
          <ul className={styles.list}>
            <li className={styles.item}>
              <Image src={"/ring.svg"} width={20} height={20} alt="image" />
              <p>خدمة التنبيهات للمنافسات المحددة في منصة اعتماد</p>
            </li>
            <li className={styles.item}>
              <Image src={"/herarchy.svg"} width={20} height={20} alt="image" />
              <p>خدمة الإحصائيات لجميع المنافسات السابقة في اعتماد</p>
            </li>
            <li className={styles.item}>
              <Image src={"/plus.svg"} width={20} height={20} alt="image" />
              <p>الإطلاع على جميع الخدمات الأخرى</p>
            </li>
          </ul>
          {/*button */}
          <div className={styles.btn_container}>
            <button>تسجيل الدخول والاشتراك</button>
            <FaRegArrowAltCircleLeft className=" mr-4" />
          </div>
        </div>
        {/*monafasat */}
        <div className={styles.monafasat}>
          <h3>منافسات</h3>
          <p>
            هي منصة لخدمة الـقـطـاع المـؤسـسي والــتـي تــهــدف لــعـرض
            الإحـصـائـيـات وتـحليـل الـبـيـانـات ورؤيـة الـمـنـافـسـات في
            مـنـصـة إعـتـمـاد
          </p>
          <hr />
          <h3>المميزات</h3>
          <p>
            تحليل منافسات الجهات الحكومية واعطاء بروفايل كامل عن كل جهه حكومية
            ومشاريعها.
          </p>
          <p>
            تحليل بيانات المنافسات في الشركات الخاصه واعطاء بروفايل خاص لكل شركة
            ومدى نجاحها.
          </p>
          <p>امكانية البحث وتحليل البيانات عن مجال المنافسات والانشطه.</p>
          <p>
            امكانية التنبؤ بالقيمة المتوقعه للمنافسات القائمة باستخدام تقنية
            الذكاء الاصطناعي قم بالتسجيل والوصول لجميع الخدمات المقدمة والخدمات
            التي ستطلق قريباً
          </p>
        </div>
      </section>
    </>
  );
}
