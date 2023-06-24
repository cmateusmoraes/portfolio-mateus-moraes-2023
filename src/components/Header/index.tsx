"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import { Menu } from "@/components/Menu";
import { IcoHamburguer } from "@/components/IcoHamburguer";
import { Logo } from "@/components/Logo";

import styles from "./header.module.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const ctxStart = gsap.context(() => {
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      });
    }, headerRef);
    return () => {
      ctxStart?.revert();
    };
  }, []);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Logo />
          <IcoHamburguer onClick={toogleMenu} isOpen={isMenuOpen} />
          <Menu onClickButton={toogleMenu} isOpen={isMenuOpen} />
        </div>
      </div>
    </header>
  );
}
