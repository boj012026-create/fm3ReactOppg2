import { useState } from "react";
import styles from "../styles/CookieClicker.module.css"

export default function CookieClicker() {
  const [cookieAmount, setCookieAmount] = useState(0);

  const cookieClick = () => {
    setCookieAmount((prev) =>  prev + 1);
  }

  return (
    <>
      <h3>Cookie Clicker</h3>
      <h4>{cookieAmount}</h4>
      <img className={styles.clicker} onClick={cookieClick} src="../public/cookie.png" alt="Image of a cartoon chocolate Ciike" />
    </>
  )
}
