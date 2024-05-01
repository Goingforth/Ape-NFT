import React from "react";
import Image from "next/image";
import addSharp from "../../image/icon/add-sharp.png";

const IconSharp = () => {
  return (
    <>
      <Image
        priority
        src={addSharp}
        alt='addSharp'
        fill
        sizes='(min-width: 24px)'
      />
    </>
  );
};

export default IconSharp;
