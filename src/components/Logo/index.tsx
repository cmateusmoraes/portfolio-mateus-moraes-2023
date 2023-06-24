"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import styles from "./logo.module.scss";

export function Logo() {
  const bgLogoRef = useRef(null);
  const logoRef = useRef(null);
  const nameRef = useRef(null);

  useLayoutEffect(() => {
    const ctxStart = gsap.context(() => {
      gsap.to(bgLogoRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
      });
    }, bgLogoRef);
    return () => {
      ctxStart?.revert();
    };
  }, []);

  return (
    <Link className={styles.logo} href="/" ref={bgLogoRef}>
      <i title="Inspecione aqui para descobrir o maior segredo de um front-end: Como centralizar um elemento dentro de um container.">
        <span>M</span>
      </i>
      <span className={styles.name}>
        <strong>Mateus Moraes</strong>
        Especialista Front-End
      </span>
    </Link>
  );
}
