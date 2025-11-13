import { Link } from 'react-router-dom';
import React from "react";
import styles from "./footer.module.css";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>About</h4>
            <p>CarPool connects drivers and passengers for convenient, affordable carpooling.</p>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <p>Email: info@carpool.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2025 CarPool. All rights reserved.</p>
      </div>
    </footer>
  )
}
