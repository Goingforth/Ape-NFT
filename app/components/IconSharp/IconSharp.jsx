import React from "react";
import Image from "next/image";
import addSharp from "../../image/icon/add-sharp.png";

const IconSharp = () => {
  return (
    <div>
      <Image priority src={addSharp} alt='addSharp' fill />
    </div>
  );
};

export default IconSharp;
