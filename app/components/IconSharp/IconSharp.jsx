import React from "react";
import Image from "next/image";
import addSharp from "../../image/icon/add-sharp.png";

const IconSharp = () => {
  return (
    <div>
      <Image
        priority
        src={addSharp}
        alt='addSharp'
        fill
        sizes='(min-width: 24px)'
      />
    </div>
  );
};

export default IconSharp;
