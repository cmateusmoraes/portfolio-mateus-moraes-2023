"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Title } from "@/components/Title";
import { PortfolioItem } from "./PortfolioItem";

import dataJobs from "@/data/jobs.json";

import styles from "./portfolio.module.scss";

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  let titleRef = useRef(null);
  let icoTLRef = useRef(null);
  let icoBRRef = useRef(null);

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
      icoTLRef.current,
      { y: -40, x: -20, autoAlpha: 0 },
      {
        y: 0,
        x: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: icoTLRef.current,
          start: "bottom bottom",
          scrub: false,
        },
      }
    );

    gsap.fromTo(
      icoBRRef.current,
      { y: 40, x: 40, autoAlpha: 0 },
      {
        y: 0,
        x: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: icoBRRef.current,
          start: "30% bottom",
          scrub: false,
        },
      }
    );
  });

  return (
    <section className={styles.portfolio} id="portfolio">
      <Image
        className={styles.icoTL}
        src="/image/ico-circle.svg"
        alt="Mateus Moraes"
        width={558}
        height={558}
        ref={icoTLRef}
      />
      <div className="container">
        <hgroup>
          <Title theme="light">Portfolio</Title>
          <h2 ref={titleRef}>Últimos projetos</h2>
        </hgroup>

        <div className="jobs">
          {dataJobs.map((_job, index) => (
            <PortfolioItem
              key={index}
              image={_job.image}
              title={_job.title}
              technologies={_job.technologies}
            >
              <div dangerouslySetInnerHTML={{ __html: _job.text }} />
            </PortfolioItem>
          ))}
        </div>
      </div>
      <Image
        className={styles.icoBR}
        src="/image/ico-circle.svg"
        alt="Mateus Moraes"
        width={558}
        height={558}
        ref={icoBRRef}
      />
    </section>
  );
}
