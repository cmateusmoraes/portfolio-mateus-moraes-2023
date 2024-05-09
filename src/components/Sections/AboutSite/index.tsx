"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { Title } from "@/components/Title";

import styles from "./about-site.module.scss";

import imgPortfolio from "./portfolio-pessoal.webp";

gsap.registerPlugin(ScrollTrigger);

export function AboutSite() {
  let titleRef = useRef(null);
  let articleRef = useRef(null);
  let screenRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "bottom bottom",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      articleRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: articleRef.current,
          start: "150 bottom",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      screenRef.current,
      { y: 0, autoAlpha: 0 },
      {
        y: -140,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: screenRef.current,
          start: "200 bottom",
          scrub: false,
        },
      }
    );
  });

  return (
    <section className={styles.aboutSite} id="this-site">
      <div className="container">
        <header>
          <Title>Sobre o site</Title>
          <h2 ref={titleRef}>Descrição técnica</h2>
        </header>

        <article ref={articleRef}>
          <h3>Tecnologias utilizadas no desenvolvimento desse site:</h3>

          <ul>
            <li>
              <strong>Next.js 13</strong> usando App Router e{" "}
              <strong>Typescript</strong>.
            </li>
            <li>
              <strong>CSS Modules</strong> com <strong>SASS</strong> e{" "}
              <strong>GSAP + ScrollTrigger</strong> para animações.
            </li>
            <li>
              Implementação de <strong>testes automatizados</strong> com{" "}
              <strong>Cypress</strong>
            </li>
            <li>
              Automatização de processo com <strong>husky</strong> rodando{" "}
              <strong>lint-staged</strong> antes dos commits.
            </li>
            <li>
              <strong>Pipeline automatizada (CI/CD)</strong>, integração enter Github Actions e Vercel{" "}<br />
              para deploy em ambiente de homologação e produção.
            </li>
            <li>
              <strong>Código limpo</strong>, semanticamente organizado e
              indexável.
            </li>
            <li>
              Implementação de boas práticas para obter uma boa{" "}
              <strong>performance</strong>.{" "}<br />
              <a
                href="https://pagespeed.web.dev/analysis/https-www-mateusmoraes-com-br/eecimo4a2i?form_factor=desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>{" "}
              para avaliar com Pagespeed.
            </li>
          </ul>

          <p>
            Código fonte disponível Github:{" "}
            <a
              href="https://github.com/cmateusmoraes/portfolio-mateus-moraes-2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/cmateusmoraes/portfolio-mateus-moraes-2023
            </a>
          </p>
        </article>

        <Image
          ref={screenRef}
          src={imgPortfolio}
          alt="Portfolio Pessoal Mateus Moraes Desenvolvedor Front-End Especialista"
          loading="lazy"
          quality={100}
        ></Image>
      </div>
    </section>
  );
}
