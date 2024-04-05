"use client";
import React from "react";
import styles from "./styles.module.css";
import dataFAQ from "../../const/dataFAQ";
import Image from "next/image";
import { useResize } from "../Hooks/use-resize";
import { nanoid } from "nanoid";
import { useState } from "react";

const FAQ = () => {
  const { isMobile, isDesktop } = useResize();
  const [isActive, setIsActive] = useState(1);

  const onClick = (serialNumber) => {
    setIsActive(serialNumber);
  };
  return (
    <section className={styles.container}>
      <div className={styles.title}>FAQ</div>
      <div className={styles.mapFAQ}>
        {dataFAQ.map((item) => {
          const { serialNumber, image, question, answer } = item;
          return (
            <div
              key={nanoid()}
              className={styles.itemFAQ}
              style={{
                backgroundColor:
                  isActive === serialNumber ? "var(--color-button_hover)" : "",
              }}
              onClick={() => {
                onClick(serialNumber);
              }}
            >
              {!isMobile &&
                (isActive === serialNumber ? (
                  <div className={styles.imageWrapper}>
                    <Image
                      priority
                      src={image}
                      alt='imageUser'
                      fill
                      sizes='(min-width: 768px) 148px, (min-width: 1440px) 248px'
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      width: !isDesktop ? "148px" : "248px",
                      height: "0px",
                      backgroundColor: "var(--color-black)",
                    }}
                  />
                ))}
              <div
                className={styles.blockNumber}
                style={{
                  color: isActive === serialNumber ? "var(--color-white)" : "",
                }}
              >
                [ {serialNumber} ]
              </div>
              <div className={styles.blockInfo}>
                <div
                  className={styles.blockInfoQuestion}
                  style={{
                    color: isActive === serialNumber ? "var(--color-red)" : "",
                  }}
                >
                  {question}
                </div>

                {isActive === serialNumber && (
                  <div className={styles.blockInfoAnswer}>{answer}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
