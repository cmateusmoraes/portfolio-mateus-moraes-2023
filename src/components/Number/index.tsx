"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./number.module.scss";

type NumberProps = {
  value: Number;
  unit?: String;
  children: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

export function Number({ value, unit = "", children }: NumberProps) {
  const numberRef = useRef(null);
  const valueRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      numberRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        delay: 0.3,
        duration: 0.4,
        scrollTrigger: {
          trigger: numberRef.current,
          start: "bottom bottom",
        },
      }
    );

    gsap.fromTo(
      valueRef.current,
      { y: 20, autoAlpha: 0, textContent: 0 },
      {
        y: 0,
        autoAlpha: 1,
        overwrite: true,
        snap: {
          textContent: 1,
        },
        textContent: value,
        delay: 0.3,
        duration: 3,
        scrollTrigger: {
          trigger: valueRef.current,
          start: "bottom bottom",
        },
      }
    );
  });

  return (
    <div className={styles.number} ref={numberRef}>
      <strong ref={valueRef}>{String(value)}</strong>
      <span>{unit}</span>
      <p>{children}</p>
    </div>
  );
}
