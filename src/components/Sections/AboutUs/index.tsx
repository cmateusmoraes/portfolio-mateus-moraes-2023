"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Number } from "@/components/Number";
import { Title } from "@/components/Title";
import { Technologies } from "@/components/Technologies";

import styles from "./about.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function AboutUs() {
  const titleRef = useRef(null);
  const techsRef = useRef(null);
  const imageMobRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

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
        },
      }
    );

    gsap.fromTo(
      techsRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: techsRef.current,
          start: "20% bottom",
        },
      }
    );

    gsap.fromTo(
      imageMobRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 0.8,
        scrollTrigger: {
          trigger: imageMobRef.current,
          start: "20% bottom",
        },
      }
    );

    gsap.fromTo(
      p1Ref.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.4,
        duration: 0.8,
        scrollTrigger: {
          trigger: p1Ref.current,
          start: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      p2Ref.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.5,
        duration: 0.8,
        scrollTrigger: {
          trigger: p2Ref.current,
          start: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      p3Ref.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.5,
        duration: 0.8,
        scrollTrigger: {
          trigger: p3Ref.current,
          start: "bottom bottom",
        },
      }
    );
  });

  return (
    <section className={styles.aboutUs} id="about">
      <div className="container">
        <div className={styles.technologies}>
          <hgroup ref={titleRef}>
            <Title>Sobre</Title>
            <h2>Desenvolvedor Front-End Sr.</h2>
          </hgroup>
          <div ref={techsRef}>
            <Technologies />
          </div>
        </div>
        <div className={styles.text}>
          <p ref={p1Ref}>
            Meu nome é Mateus Moraes, sou um front-end que realmente gosta do
            que faz. Comecei trabalhando em agências de publicidade como júnior
            e, quando saí delas, estava coordenando equipes de desenvolvimento.
          </p>
          <p ref={p2Ref}>
            Em 2015, decidi seguir carreira solo como freelancer, onde tenho a
            oportunidade de participar dos mais variados tipos de projetos:
            produtos digitais para startups, MVPs, sites promocionais,
            plataformas de fidelização de clientes, institucionais e landing
            pages.
          </p>
          <p ref={p3Ref}>
            Em muitos desses projetos, tenho contato direto com o cliente desde
            a ideação, ajudando na definição do melhor tipo de arquitetura para
            cada um dos desafios.
          </p>

          <div className={styles.numbers}>
            <Number value={20} unit="+">
              Anos de experiência
            </Number>
            <Number value={43} unit="K+">
              Chícaras de café
            </Number>
            <Number value={2} unit=".">
              Filhos lindos
            </Number>
          </div>
        </div>
      </div>
    </section>
  );
}
