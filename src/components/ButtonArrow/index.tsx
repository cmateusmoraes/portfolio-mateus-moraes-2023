/* eslint-disable @next/next/no-img-element */
import styles from "./button-arrow.module.scss";

export function ButtonArrow() {
  return (
    <div className={styles.buttonArrow}>
      <img src="/image/arrow-white.svg" alt="Seguir" width={20} height={20} />
    </div>
  );
}
