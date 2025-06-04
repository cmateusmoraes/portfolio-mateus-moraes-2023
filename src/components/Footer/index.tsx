"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

import { Menu } from "../Menu";

import { ButtonArrow } from "../ButtonArrow";
import { Logo } from "../Logo";
import styles from "./footer.module.scss";

export function Footer() {
  const titleRef = useRef(null);
  const letsTalkRef = useRef(null);
  const aboutRef = useRef(null);
  const siteMapRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        duration: 0.6,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "bottom bottom",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      letsTalkRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        duration: 0.6,
        delay: 0.3,
        scrollTrigger: {
          trigger: letsTalkRef.current,
          start: "bottom bottom",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      aboutRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        duration: 0.6,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "bottom bottom",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      siteMapRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: siteMapRef.current,
          start: "20% bottom",
          scrub: false,
        },
      }
    );
  });
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.start}>
          <h2 ref={titleRef}>
            Quer começar
            <br /> um projeto?
          </h2>
          <Link
            href="https://api.whatsapp.com/send?phone=5511930322625"
            target="_blank"
            rel="noreferrer noopener"
            ref={letsTalkRef}
          >
            Vamos conversar
            <ButtonArrow />
          </Link>
        </div>

        <div className={styles.info}>
          <div className={styles.about} ref={aboutRef}>
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

          <nav className="sitemap" ref={siteMapRef}>
            <Menu position="footer" onClickButton={() => { }} />
          </nav>
        </div>
      </div>
    </footer>
  );
}
