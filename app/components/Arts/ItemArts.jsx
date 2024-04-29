import React from "react";
import styles from "./styles.module.css";
import data from "@/public/slider/data";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// const ItemArts = ({ number, currentImage }) => {
//   return (
//     <div className={styles.itemArts}>
//       <LazyLoadImage
//         className={styles.imgArts}
//         alt='Picture of the NFT'
//         src={data[currentImage + number]}
//         effect='blur'
//         wrapperProps={{
//           // If you need to, you can tweak the effect transition using the wrapper style.
//           style: { transitionDelay: "1s" },
//         }}
//       />
//     </div>
//   );
// };
const ItemArts = ({ src }) => {
  console.log(src);
  return (
    <div className={styles.itemArts}>
      <LazyLoadImage
        className={styles.imgArts}
        alt='Picture of the NFT'
        src={src}
        effect='blur'
        wrapperProps={{
          // If you need to, you can tweak the effect transition using the wrapper style.
          style: { transitionDelay: "1s" },
        }}
      />
    </div>
  );
};

export default ItemArts;
