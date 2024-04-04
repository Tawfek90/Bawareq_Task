import React from "react";
import styles from "./Comppetitions.module.scss";
import Image from "next/image";
export default function Competitions() {
  return (
    <>
      <div className={styles.competition}>
        {/*intro */}
        <div className={styles.intro}>
          <h2>منافسات</h2>
          <p>
            هي منصة تخدم رواد الأعمال و القطاع المؤسسي والتي تهدف لعرض المنافسات
            ومبالغها ، وتحليل بيانات المنافسات باستخدام الذكاء الاصطناعي، لإعطاء
            رؤية باسهاب عن مشاريع القطاعات والوزارات والجهات المستفيده.
          </p>
          <button>المزيد عن منافسات</button>
        </div>
        {/*image1*/}
        <div className={styles.img_container}>
          <Image
            src={"https://www.monafsat.net/assets/img/dashboard3.svg"}
            width={200}
            height={200}
          />
        </div>
      </div>
      {/*image 2 */}
      <div className="imag2_container flex justify-center bg-[#E7E9EC] ">
        <Image
          src={"/mobile.gif"}
          width={200}
          height={200}
          alt="mobile "
          className=" w-[50%] max-w-[398px]"
        />
      </div>
    </>
  );
}
