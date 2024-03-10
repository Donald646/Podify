"use client";
import FileInput from "../_components/fileinput/fileinput";
import styles from "./podify.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Podify</h1>
      <FileInput />
    </main>
  );
}
