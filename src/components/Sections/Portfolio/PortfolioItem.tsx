/* eslint-disable @next/next/no-img-element */

"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { ButtonArrow } from "@/components/ButtonArrow";

import styles from "./portfolio.module.scss";

type PortfolioItemProps = {
  image: String;
  title: String;
  technologies: String[];
  url?: String;
  children: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

export function PortfolioItem({
  image,
  title,
  url,
  technologies,
  children,
}: PortfolioItemProps) {
  const color = "#4accb4";

  let jobRef = useRef(null);

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
      <Link href={String(url)} target="_blank" rel="noopener noreferrer">
        <div className={styles.image}>
          <Image
            src={String(image)}
            alt={String(title)}
            width={800}
            height={540}
            quality={100}
            loading="lazy"
          />
        </div>

        <div className={styles.detail}>
          <h4>{title}</h4>
          {children}

          <ul>
            {technologies?.includes("react") && (
              <li>
                <svg viewBox="0 0 128 128">
                  <g fill={color}>
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </li>
            )}

            {technologies?.includes("next") && (
              <li>
                <svg viewBox="0 0 128 128">
                  <path
                    fill={color}
                    d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z"
                  ></path>
                  <path fill={color} d="M78.6 73.3l7.5 11.3V41.8h-7.5z"></path>
                </svg>
              </li>
            )}

            {technologies?.includes("javascript") && (
              <li>
                <svg viewBox="0 0 40 40" fill="none">
                  <path
                    d="M6.25017 26.0974L9.58763 23.994C10.2316 25.1828 10.8173 26.1888 12.2223 26.1888C13.5691 26.1888 14.4183 25.6402 14.4183 23.5063V8.99412H18.5168V23.5666C18.5168 27.9872 16.0285 29.9995 12.398 29.9995C9.11929 29.9995 7.21631 28.2315 6.25017 26.0974ZM20.743 25.64L24.0801 23.628C24.9587 25.122 26.1005 26.2195 28.1203 26.2195C29.8187 26.2195 30.9015 25.3352 30.9015 24.1157C30.9015 22.6524 29.789 22.134 27.9154 21.2806L26.891 20.8229C23.9339 19.5123 21.9725 17.8659 21.9725 14.3904C21.9725 11.1891 24.3145 8.75 27.9741 8.75C30.5797 8.75 32.4534 9.69526 33.7999 12.1647L30.6087 14.299C29.9059 12.9881 29.1451 12.4698 27.974 12.4698C26.7736 12.4698 26.0124 13.2625 26.0124 14.299C26.0124 15.5794 26.7736 16.098 28.53 16.8907L29.5546 17.3479C33.0386 18.9029 35 20.4881 35 24.0548C35 27.8966 32.1017 30 28.208 30C24.4023 30 21.9432 28.1096 20.743 25.64Z"
                    fill={color}
                  />
                </svg>
              </li>
            )}

            {technologies?.includes("typescript") && (
              <li>
                <svg viewBox="0 0 40 40" fill="none">
                  <path
                    fill={color}
                    d="M29.7838 10.3039C30.8478 10.5514 31.8148 11.1086 32.5625 11.9051C32.9744 12.3362 33.3321 12.816 33.6275 13.3339C33.6413 13.3901 31.71 14.6876 30.5388 15.4114C30.4963 15.4401 30.3275 15.2564 30.1363 14.9739C29.9223 14.6061 29.6186 14.2985 29.2535 14.0799C28.8885 13.8613 28.474 13.7388 28.0488 13.7239C26.7025 13.6314 25.835 14.3364 25.8413 15.5151C25.8296 15.8047 25.8957 16.0921 26.0325 16.3476C26.3288 16.9601 26.8788 17.3276 28.6063 18.0764C31.7863 19.4451 33.1513 20.3476 33.9938 21.6301C34.47 22.4404 34.7633 23.3451 34.8531 24.2807C34.9429 25.2163 34.8271 26.1602 34.5138 27.0464C34.0831 28.0181 33.4002 28.857 32.5359 29.4757C31.6716 30.0945 30.6575 30.4706 29.5988 30.5651C28.4734 30.6942 27.3363 30.6824 26.2138 30.5301C24.4944 30.2476 22.9105 29.4224 21.6938 28.1751C21.234 27.6574 20.8448 27.0812 20.5363 26.4614C20.666 26.3648 20.8026 26.2779 20.945 26.2014C21.1425 26.0889 21.89 25.6589 22.595 25.2501L23.875 24.5001L24.1425 24.8901C24.5931 25.5344 25.1666 26.0833 25.83 26.5051C26.5 26.8726 27.259 27.0468 28.0223 27.0082C28.7855 26.9695 29.523 26.7196 30.1525 26.2864C30.4772 25.9699 30.6802 25.5492 30.7259 25.098C30.7716 24.6469 30.6572 24.1941 30.4025 23.8189C30.0575 23.3251 29.3525 22.9101 27.3488 22.0414C25.7776 21.5116 24.3465 20.6334 23.1625 19.4726C22.5987 18.8301 22.1823 18.0719 21.9425 17.2514C21.7652 16.3166 21.7391 15.3594 21.865 14.4164C22.1002 13.3312 22.6634 12.3445 23.4782 11.5901C24.2929 10.8357 25.3199 10.35 26.42 10.1989C27.5402 10.065 28.6741 10.1004 29.7838 10.3039ZM19.355 12.1576L19.3688 13.9751H13.5813V30.4101H9.50001V13.9789H3.71251V12.1939C3.69712 11.5826 3.71381 10.9709 3.76251 10.3614C3.78376 10.3326 7.30251 10.3189 11.5688 10.3264L19.3325 10.3476L19.355 12.1576Z"
                  />
                </svg>
              </li>
            )}

            {technologies?.includes("styled") && (
              <li>
                <svg fill={color} viewBox="0 0 24 24" role="img">
                  <path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z" />
                </svg>
              </li>
            )}

            {technologies?.includes("sass") && (
              <li>
                <svg viewBox="0 -4 32 32">
                  <path
                    fill={color}
                    d="m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z"
                  />
                </svg>
              </li>
            )}

            {technologies?.includes("storybook") && (
              <li>
                <svg fill={color} viewBox="0 0 32 32">
                  <path d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z" />
                </svg>
              </li>
            )}

            {technologies?.includes("redux") && (
              <li>
                <svg viewBox="0 0 128 128">
                  <path fill="none" d="M0 0h128v128H0z"></path>
                  <path
                    fill={color}
                    d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                  ></path>
                </svg>
              </li>
            )}

            {technologies?.includes("cypress") && (
              <li>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path
                    stroke={color}
                    d="M32.4667 28.345C34.3274 25.5658 35.2059 22.2445 34.9625 18.9089C34.7193 15.5731 33.3682 12.4145 31.1239 9.93468C28.8797 7.45491 25.871 5.79632 22.576 5.22244C19.2812 4.64858 15.8889 5.19236 12.9384 6.7674C9.98799 8.34242 7.64854 10.8583 6.29185 13.9154C4.93517 16.9724 4.63907 20.3951 5.4506 23.6396C6.26215 26.8843 8.13478 29.7646 10.7709 31.8229C13.407 33.8813 16.6555 34.9995 20 35C20.728 35.0001 21.4375 34.7711 22.028 34.3455C22.6185 33.9198 23.0602 33.319 23.29 32.6284L29.1667 15M22.5 15L25.8334 25"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    stroke={color}
                    d="M17.9401 15.685C17.1821 15.2408 16.3205 15.0041 15.4418 14.999C14.5633 14.9938 13.699 15.22 12.9357 15.6551C12.1725 16.0903 11.5374 16.7189 11.0944 17.4775C10.6514 18.2361 10.4161 19.0981 10.4122 19.9768C10.4083 20.8553 10.6359 21.7193 11.0722 22.4819C11.5085 23.2444 12.138 23.8785 12.8973 24.3204C13.6567 24.7623 14.519 24.9963 15.3976 24.9989C16.2761 25.0014 17.1398 24.7724 17.9017 24.335"
                    strokeWidth="1.875"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            )}

            {technologies?.includes("query") && (
              <li>
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 66 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_407_12)">
                    <path
                      fill={color}
                      d="M19.2516 37.8337C19.6957 37.5797 20.2672 37.7384 20.521 38.1934L20.6902 38.4791C21.9916 40.7853 23.3457 42.9752 24.7527 45.049C26.4137 47.4927 28.2863 49.9684 30.3706 52.4755C30.5293 52.6641 30.6071 52.9076 30.5873 53.1532C30.5675 53.3989 30.4516 53.6268 30.2647 53.7874L30.0638 53.9673C23.1765 59.9871 18.7121 61.1823 16.6489 57.5748C14.6284 54.0415 15.3583 47.6303 18.8388 38.3204C18.9148 38.1146 19.0609 37.9423 19.2516 37.8337V37.8337ZM48.5565 44.9114C49.0538 44.8266 49.5299 45.1443 49.625 45.6413L49.6781 45.9165C51.3813 54.8136 50.1859 59.2677 46.0914 59.2677C42.082 59.2677 36.9933 55.4696 30.7937 47.8841C30.6544 47.7149 30.5828 47.5001 30.5927 47.2812C30.5927 46.7734 31.0157 46.3606 31.5236 46.3606H31.8515C34.3897 46.3806 36.9275 46.2924 39.4582 46.0963C42.3569 45.8634 45.3932 45.472 48.5565 44.9114V44.9114ZM50.9155 26.0165C51.0022 25.7826 51.1769 25.5919 51.4023 25.4852C51.6277 25.3784 51.8859 25.364 52.1218 25.445L52.397 25.5403C61.2307 28.545 64.595 31.8562 62.4684 35.4639C60.3949 38.9975 54.3646 41.5685 44.367 43.1765C44.1449 43.2081 43.912 43.1656 43.7216 43.0492C43.2666 42.7848 43.1082 42.2136 43.3831 41.7586L43.5524 41.4732C44.9174 39.1879 46.1442 36.9134 47.2552 34.6387C48.546 31.9621 49.7731 29.0845 50.9158 26.0165H50.9155ZM21.6005 23.3504C21.8226 23.3187 22.0555 23.3612 22.2459 23.4777C22.7009 23.742 22.8593 24.3132 22.5844 24.7682L22.4152 25.0536C21.0855 27.2788 19.8501 29.559 18.7123 31.8881C17.4215 34.5648 16.1944 37.4424 15.0517 40.5104C14.965 40.7441 14.7904 40.9348 14.565 41.0415C14.3397 41.1483 14.0816 41.1628 13.8457 41.0818L13.5706 40.9865C4.73679 37.9819 1.3725 34.6707 3.49908 31.0629C5.57258 27.5293 11.603 24.9583 21.6005 23.3504V23.3504ZM35.9037 12.5596C42.791 6.53974 47.2555 5.34456 49.3187 8.95206C51.3391 12.4853 50.6092 18.8965 47.1287 28.2064C47.0528 28.4122 46.9066 28.5846 46.716 28.6931C46.2718 28.9471 45.7003 28.7884 45.4466 28.3334L45.2773 28.0477C43.9759 25.7416 42.6218 23.5516 41.2148 21.4778C39.5538 19.0341 37.6812 16.5584 35.5969 14.0513C35.4382 13.8627 35.3604 13.6192 35.3802 13.3736C35.4 13.128 35.5159 12.9001 35.7028 12.7394L35.9037 12.5596ZM20.2144 6.92081C24.2241 6.92081 29.3233 10.7187 35.5124 18.3039C35.6485 18.4715 35.7232 18.6806 35.7239 18.8965C35.7134 19.4149 35.3009 19.8276 34.7825 19.8276L34.4651 19.8168C31.9269 19.8054 29.3892 19.8972 26.8585 20.092C23.9492 20.3249 20.9129 20.7162 17.7495 21.2769C17.51 21.3177 17.2639 21.2631 17.0642 21.1247C16.8645 20.9862 16.7269 20.7751 16.6811 20.5364L16.628 20.2718C14.9245 11.3747 16.1199 6.92054 20.2144 6.92054V6.92081ZM27.9903 22.6627H37.9772C38.2791 22.6628 38.5756 22.742 38.8373 22.8923C39.0991 23.0427 39.3169 23.259 39.469 23.5196L44.4732 32.2372C44.6189 32.4974 44.6954 32.7907 44.6954 33.0889C44.6954 33.3871 44.6189 33.6803 44.4732 33.9405L39.469 42.6686C39.3169 42.9293 39.0991 43.1455 38.8375 43.2959C38.5758 43.4462 38.2793 43.5254 37.9775 43.5256H27.9905C27.3768 43.5256 26.8056 43.1976 26.5091 42.6686L21.4946 33.9405C21.3489 33.6803 21.2724 33.387 21.2724 33.0887C21.2724 32.7905 21.3489 32.4972 21.4946 32.237L26.5094 23.5196C26.8054 22.9907 27.3768 22.6627 27.9903 22.6627V22.6627ZM36.7395 24.8104C37.0414 24.8105 37.3379 24.8897 37.5996 25.04C37.8614 25.1904 38.0791 25.4067 38.2313 25.6673L41.9975 32.2372C42.1432 32.4974 42.2197 32.7907 42.2197 33.0889C42.2197 33.3871 42.1432 33.6803 41.9975 33.9405L38.2313 40.5209C38.0791 40.7816 37.8614 40.9979 37.5996 41.1482C37.3379 41.2986 37.0414 41.3777 36.7395 41.3778H29.2282C28.6145 41.3778 28.0434 41.0499 27.7471 40.5209L23.9703 33.9405C23.8246 33.6803 23.748 33.387 23.748 33.0887C23.748 32.7905 23.8246 32.4972 23.9703 32.237L27.7471 25.6673C28.0434 25.1384 28.6145 24.8104 29.2282 24.8104H36.7395ZM35.4065 27.1591H30.5613C29.9476 27.1591 29.387 27.4765 29.0798 28.016L26.6469 32.2372C26.5013 32.4974 26.4248 32.7907 26.4248 33.0889C26.4248 33.3871 26.5013 33.6803 26.6469 33.9405L29.0801 38.1723C29.23 38.4326 29.4459 38.6488 29.7059 38.7992C29.9659 38.9496 30.2609 39.0289 30.5613 39.0292H35.4065C35.7069 39.029 36.002 38.9497 36.2621 38.7993C36.5221 38.6489 36.738 38.4326 36.888 38.1723L39.3209 33.9405C39.4666 33.6803 39.5431 33.387 39.5431 33.0887C39.5431 32.7905 39.4666 32.4972 39.3209 32.237L36.8877 28.016C36.5808 27.4765 36.0202 27.1591 35.4065 27.1591ZM34.116 29.4019C34.7294 29.4019 35.3009 29.7298 35.5969 30.2588L36.7398 32.2372C37.0464 32.7662 37.0464 33.4221 36.7398 33.9405L35.5969 35.9295C35.3009 36.4584 34.7294 36.7864 34.116 36.7864H31.8518C31.5515 36.7861 31.2565 36.7068 30.9965 36.5564C30.7366 36.406 30.5208 36.1897 30.3709 35.9295L29.228 33.9405C28.9214 33.4221 28.9214 32.7662 29.228 32.237L30.3709 30.2588C30.5208 29.9985 30.7366 29.7823 30.9965 29.6319C31.2565 29.4815 31.5515 29.4021 31.8518 29.4019H34.116ZM32.9839 31.613C32.7244 31.6137 32.4696 31.6825 32.2449 31.8125C32.0203 31.9425 31.8337 32.1291 31.7037 32.3537C31.4393 32.8087 31.4393 33.3693 31.7037 33.8346C31.8342 34.0579 32.0213 34.243 32.246 34.3711C32.4707 34.4993 32.7252 34.5661 32.9839 34.5648C33.2426 34.5661 33.4971 34.4993 33.7218 34.3711C33.9465 34.243 34.1335 34.0579 34.2641 33.8346C34.5285 33.3693 34.5285 32.8084 34.2641 32.3537C34.1341 32.129 33.9474 31.9424 33.7227 31.8124C33.498 31.6824 33.2432 31.6137 32.9836 31.613H32.9839ZM21.0079 33.0941H23.6634ZM51.8891 21.753C52.947 16.6221 53.1797 12.6969 52.492 9.84066C52.0901 8.13712 51.3496 6.76183 50.2176 5.75704C49.0221 4.69889 47.5092 4.18079 45.8165 4.18079C43.0129 4.18079 40.0719 5.46074 36.9297 7.88335C35.6497 8.86729 34.3167 10.0627 32.9414 11.4486C32.8249 11.311 32.7085 11.1737 32.5711 11.0572C28.6565 7.57649 25.3664 5.41849 22.5522 4.5827C20.8809 4.08545 19.3149 4.04293 17.8868 4.51906C16.374 5.02687 15.1677 6.07418 14.3216 7.54481C12.9252 9.96741 12.5547 13.1624 13.073 17.0982C13.2848 18.6956 13.6551 20.4411 14.1629 22.3347C13.9652 22.358 13.7702 22.4006 13.5809 22.462C8.63029 24.112 5.11758 25.868 2.991 27.8887C1.7319 29.0842 0.906937 30.4278 0.600083 31.8984C0.293228 33.4641 0.600083 35.0298 1.44644 36.5004C2.84285 38.923 5.4136 40.8275 9.07419 42.3404C10.5448 42.9433 12.2056 43.4933 14.0675 43.9906C13.9805 44.1871 13.9166 44.393 13.8771 44.6043C12.8193 49.7247 12.5866 53.6604 13.2743 56.5061C13.6762 58.2096 14.4272 59.5955 15.5487 60.5897C16.7442 61.6478 18.2571 62.1659 19.9498 62.1659C22.7534 62.1659 25.6941 60.886 28.8366 58.4739C30.1271 57.4689 31.4707 56.2628 32.8672 54.8556C33.0172 55.0814 33.1949 55.2876 33.3961 55.4693C37.3107 58.9501 40.6008 61.1081 43.415 61.9438C45.0866 62.4411 46.6523 62.4836 48.0804 62.0075C49.5933 61.4997 50.7996 60.4524 51.6457 58.9817C53.0424 56.5591 53.4126 53.3641 52.8942 49.4286C52.6721 47.7676 52.2911 45.9585 51.741 43.98C51.9598 43.9592 52.176 43.9168 52.3864 43.8533C57.3372 42.2028 60.8499 40.4467 62.9762 38.4258C64.2354 37.2306 65.0606 35.887 65.3672 34.4163C65.674 32.8507 65.3672 31.2847 64.5208 29.8143C63.1244 27.3915 60.5536 25.4872 56.8931 23.9744C55.3802 23.3504 53.6558 22.7789 51.7304 22.2817C51.804 22.1122 51.8573 21.9347 51.8891 21.7527V21.753Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_407_12">
                      <rect
                        width="65"
                        height="65"
                        fill="white"
                        transform="translate(0.483765 0.763428)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            )}

            <li>
              <svg viewBox="0 0 128 128">
                <path
                  fill={color}
                  d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"
                ></path>
              </svg>
            </li>
          </ul>
        </div>

        <ButtonArrow />
      </Link>
    </div>
  );
}
