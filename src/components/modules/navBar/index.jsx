import React from "react";
import { Input } from "antd";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.container_top}>
        <Link className={styles.container_top_item} to="/">
          Liên hệ
        </Link>
        <div className={styles.border_vertical} />
        <Link className={styles.container_top_item} to="/">
          Giới thiệu
        </Link>
        <div className={styles.border_vertical} />
        <Link className={styles.container_top_item} to="/">
          Hỗ trợ
        </Link>
      </div>

      <div className={styles.border} />

      <div className={styles.container_mid}>
        <div className={styles.container_mid_navi}>
          <div >
            <img
            className={styles.container_mid_navi_logo}
              src="assets/images/logo.png"
              alt="logo"
            />
          </div>
          <Input style={{ height: "44px" }} placeholder="tìm kiếm" />
        </div>
        <div className={styles.container_mid_box}>
          <div className={styles.container_mid_box_item}>
            <img
              style={{ width: "50px" }}
              src="assets/icons/call-docter.svg"
              alt="stethoscope"
            />
            Hỏi bác sĩ
          </div>
          <div className={styles.container_mid_box_item}>
            <img
              style={{ width: "50px" }}
              src="assets/icons/stethoscope.svg"
              alt="stethoscope"
            />
            Đăng ký khám
          </div>
        </div>
      </div>
      {/* <div>select</div> */}
    </div>
  );
}
