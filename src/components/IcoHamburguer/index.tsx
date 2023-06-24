import styles from "./hamburguer.module.scss";

type IcoHamburguerProps = {
  isOpen: Boolean;
  onClick: () => void;
};

export function IcoHamburguer({
  isOpen: isClicked = false,
  onClick,
}: IcoHamburguerProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.hamburger} ${styles.hamburgerSpring} ${isClicked ? styles.isActive : ""}`}
    >
      <span className={`${styles.hamburgerBox}`}>
        <span className={`${styles.hamburgerInner}`} />
      </span>
    </div>
  );
}
