"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Title } from "../../Title";
import { gsap } from "gsap";

import styles from "./hero.module.scss";

import imgHero from "./mateus-moraes-front-end-hero.webp";

export function Hero() {
  const heroRef = useRef(null);
  const icoTLRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const icoBRRef = useRef(null);
  const timelineStart = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctxStart = gsap.context(() => {
      timelineStart.current
        .to(heroRef.current, { opacity: 1, duration: 0.5 }, 0)
        .to(icoTLRef.current, { opacity: 1, x: 0, y: 0, duration: 0.5 }, 0.3)
        .to(textRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.2)
        .to(
          imageRef.current,
          { opacity: 1, scale: 1, y: 0, duration: 0.4 },
          0.3
        )
        .to(icoBRRef.current, { opacity: 1, x: 0, y: 0, duration: 0.5 }, 0.4);
    }, heroRef);
    return () => {
      ctxStart?.revert();
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef} id="home">
      <div className="container">
        <div className={styles.heroWrapper}>
          <div className={styles.text} ref={textRef}>
            <Title theme="light">Desenvolvedor Front-End</Title>
            <h1>
              React, Javascript,
              <br />
              Next.js, Typescript
              <br />
              HTML, CSS
            </h1>
            <p>
              <strong>Produtos digitais</strong> modernos, fiéis ao layout, com
              qualidade e automatização de testes e processos, CI/CD Pipelines,
              integrações com APIs.
            </p>
          </div>
          <div className={styles.image} ref={imageRef}>
            <Image
              src={imgHero}
              alt="Desenvolvimento de produtos digitais modernos, fiéis ao layout, com
              qualidade e automatização de testes e processos, CI/CD Pipelines, integrações com APIs."
              priority={true}
              quality={80}
            />
          </div>
        </div>
      </div>

      <div className={styles.bg}>
        <Image
          className={styles.icoTL}
          src="/image/ico-circle.svg"
          alt="Mateus Moraes Front-End Sênior"
          width={442}
          height={442}
          ref={icoTLRef}
        />
        <Image
          className={styles.icoBR}
          src="/image/ico-circle.svg"
          alt="Mateus Moraes Front-End Especialista"
          width={442}
          height={442}
          ref={icoBRRef}
        />
      </div>
    </section>
  );
}
