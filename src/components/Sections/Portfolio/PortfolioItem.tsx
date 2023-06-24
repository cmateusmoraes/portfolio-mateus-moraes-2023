/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ButtonArrow } from "../../ButtonArrow";

import styles from "./portfolio.module.scss";

type PortfolioItemProps = {
  image: String[];
  title: String;
  infra?: Boolean;
  back?: Boolean;
  front?: Boolean;
  children: React.ReactNode;
};

export function PortfolioItem({
  image,
  title,
  infra,
  back,
  front,
  children,
}: PortfolioItemProps) {
  let jobRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    gsap.fromTo(
      jobRef.current,
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        duration: 1,
        scrollTrigger: {
          trigger: jobRef.current,
          start: "50% bottom",
          scrub: false,
        },
      }
    );
  });

  return (
    <div className={styles.job} ref={jobRef}>
      <Link href="/">
        <div className={styles.image}>
          <picture>
            <source srcSet={String(image[0])} type="image/webp" />
            <source srcSet={String(image[1])} type="image/jpg" />
            <Image
              src={String(image[0])}
              alt="image"
              width={550}
              height={462}
            />
          </picture>
        </div>

        <div className={styles.detail}>
          <h4>{title}</h4>
          {children}

          <ul>
            {infra && (
              <li>
                <img
                  src="/image/ico-cloud.svg"
                  alt="Infraestrutura"
                  width={20}
                  height={20}
                />
                Infraestrutura
              </li>
            )}
            {back && (
              <li>
                <img
                  src="/image/ico-back.svg"
                  alt="Back-End"
                  width={20}
                  height={20}
                />
                Back-end
              </li>
            )}
            {front && (
              <li>
                <img
                  src="/image/ico-code.svg"
                  alt="Front-End"
                  width={20}
                  height={20}
                />
                Front-end
              </li>
            )}
          </ul>
        </div>

        <ButtonArrow />
      </Link>
    </div>
  );
}
