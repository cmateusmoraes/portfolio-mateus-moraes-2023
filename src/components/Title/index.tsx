"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

import styles from "./title.module.scss";

type TitleProps = {
  children: React.ReactNode;
  theme?: string;
};

gsap.registerPlugin(ScrollTrigger);

export function Title({ children, theme }: TitleProps) {
  const titleWrapperRef = useRef(null);
  const lineRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      titleWrapperRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleWrapperRef.current,
          start: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, autoAlpha: 0 },
      {
        scaleX: 1,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 0.5,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { x: -20, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.4,
        duration: 0.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "bottom bottom",
        },
      }
    );
  });

  return (
    <div
      className={`${styles.titleWrapper}
       ${theme === "light" ? styles.light : ""}`}
    >
      <h4 ref={titleWrapperRef}>
        <span data-cy="line" className={styles.line} ref={lineRef} />
        <span data-cy="titleText" ref={titleRef}>
          {children}
        </span>
      </h4>
    </div>
  );
}
