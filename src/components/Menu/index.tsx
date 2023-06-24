import { MouseEvent } from "react";
import Link from "next/link";

import styles from "./menu.module.scss";

type menuProps = {
  isOpen?: Boolean;
  position?: String;
  onClickButton: () => void;
};

export function Menu({ position, isOpen = false, onClickButton }: menuProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href") as HTMLElement | null;
    const element = document.querySelector(String(href)) as HTMLElement | null;
    const offsetTop = element?.offsetTop;
    onClickButton();

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`${styles.menu} ${
        position === "footer" ? styles.footer : ""
      } ${isOpen ? styles.isOpen : ""}`}
    >
      <Link href="#about" onClick={handleClick}>
        Sobre
      </Link>
      <Link href="#portfolio" onClick={handleClick}>
        Portfolio
      </Link>
      <Link
        href="https://www.linkedin.com/in/cmateusmoraes/"
        onClick={onClickButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>
      <Link
        href="https://github.com/cmateusmoraes"
        onClick={onClickButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Link>
      <Link
        href="https://api.whatsapp.com/send?phone=5511930322625"
        className="btn-default small"
        target="_blank"
        rel="norefereer noopener"
      >
        Entre em contato
      </Link>
    </nav>
  );
}
