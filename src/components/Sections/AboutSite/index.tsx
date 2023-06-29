"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        <hgroup>
          <Title>Sobre o site</Title>
          <h2 ref={titleRef}>Descrição técnica</h2>
        </hgroup>

        <article ref={articleRef}>
          <p>Tecnologias utilizadas no desenvolvimento desse site:</p>

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
              Automatização de publicação com <strong>Github</strong> e{" "}
              <strong>Vercel</strong>.
            </li>
            <li>
              <strong>Código limpo</strong>, semanticamente organizado e
              indexável.
            </li>
            <li>
              Implementação de boas práticas para obter uma boa{" "}
              <strong>performance</strong>.{" "}
              <a
                href="https://pagespeed.web.dev/analysis/http-mateus-moraes-vercel-app/8xn4ey20kg?form_factor=desktop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>{" "}
              para avaliar com Pagespeed.
            </li>
            <li>
              TODO: Implementar <strong>Storybook</strong>.
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
