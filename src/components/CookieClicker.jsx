import { useState } from "react";
import styles from "../styles/CookieClicker.module.css"

export default function CookieClicker() {
  const [cookieAmount, setCookieAmount] = useState(0);

  const cookieClick = () => {
    setCookieAmount((prev) =>  prev + 1);
  }

  return (
    <section className={styles.container}>
      <h1>Cookie Clicker</h1>
      <div className={styles.panel}>
        <img 
          className={styles.btn}
          onClick={cookieClick}
          src="../public/cookie.png"
          alt="Button that increase cookies, with an image of a cookie"
        />
        <h2>{cookieAmount}</h2>
      </div>
    </section>
  )
}
