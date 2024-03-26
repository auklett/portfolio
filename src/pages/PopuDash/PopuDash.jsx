import React from 'react'

import styles from "./PopuDash.module.css";
import { getImageUrl } from '../../utils';
import { Navbar } from "../../components/Navbar/Navbar";

function PopuDash () {
  return (
    <div className={styles.container}>
      <Navbar />
      <h2 className={styles.title}>World Population Dashboard</h2>
      <p className={styles.description}>
        Interactive population dashboard using Power BI, BigQuery API, SQL, and Python.
      </p>

    </div>
  )
}

export default PopuDash
