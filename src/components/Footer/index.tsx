"use client";

import { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ButtonArrow } from "@/components/ButtonArrow";
import { Menu } from "@/components/Menu";
import { Logo } from "@/components/Logo";

import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.start}>
          <h2>
            Quer começar
            <br /> um projeto?
          </h2>
          <Link
            href="https://api.whatsapp.com/send?phone=5511930322625"
            target="_blank"
            rel="norefereer noopener"
          >
            Vamos conversar
            <ButtonArrow />
          </Link>
        </div>

        <div className={styles.info}>
          <div className={styles.about}>
            <Logo />

            <p>
              Este portfolio foi criado com o intuito de usar algumas das
              tecnologias mais demandadas do mercado front-end atualmente,
              acesse o{" "}
              <Link
                href="https://github.com/cmateusmoraes"
                target="_blank"
                rel="noreferrer noopener"
              >
                github
              </Link>{" "}
              para ter acesso ao código fonte.
            </p>
          </div>

          <nav className="sitemap">
            <Menu position="footer" onClickButton={() => {}} />
          </nav>
        </div>
      </div>
    </footer>
  );
}
