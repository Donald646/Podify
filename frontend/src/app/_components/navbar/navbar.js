import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.title}>
        podify.
      </Link>
      <div className={styles.linkContainer}>
        <Link href="/podify" className={styles.links}>
          Create
        </Link>
        <Link href="/podify" className={styles.links}>
          Create
        </Link>
      </div>
    </div>
  );
}
