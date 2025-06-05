/* eslint-disable @next/next/no-img-element */
import styles from "./button-whatsapp.module.scss";

export function ButtonWhatsApp() {
  return (
    <div className={styles.buttonWhatsApp}>
      <img src="/image/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
    </div>
  );
}
