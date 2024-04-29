import React from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SpinnerDotted } from "spinners-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ItemArts = (props) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  useEffect(() => {
    setLoadedSrc(null);
    if (props.src) {
      const handleLoad = () => {
        setLoadedSrc(props.src);
      };
      const image = new Image();
      image.addEventListener("load", handleLoad);
      image.src = props.src;
      return () => {
        image.removeEventListener("load", handleLoad);
      };
    }
  }, [props.src]);
  if (loadedSrc === props.src) {
    return (
      <div className={styles.itemArts}>
        <LazyLoadImage
          className={styles.imgArts}
          alt='Picture of the NFT'
          src={props.src}
          effect='blur'
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
    );
  }
  return (
    <div
      className={styles.itemArts}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SpinnerDotted
        size='50%'
        style={{ margin: 0 }}
        color='var(--color-white)'
      />
    </div>
  );
};

export default ItemArts;
