import React from "react";
import CardMindMap from "./CardMindMap";
import dataCards from "@/app/const/dataCards";
import { nanoid } from "nanoid";

const Card0 = () => {
  const { id, title, info, isActive } = dataCards[0];
  return (
    <CardMindMap
      key={nanoid()}
      id={id}
      title={title}
      info={info}
      isActive={isActive}
    />
  );
};

const Card1 = () => {
  const { id, title, info, isActive } = dataCards[1];
  return (
    <CardMindMap
      key={nanoid()}
      id={id}
      title={title}
      info={info}
      isActive={isActive}
    />
  );
};

const Card2 = () => {
  const { id, title, info, isActive } = dataCards[2];
  return (
    <CardMindMap
      key={nanoid()}
      id={id}
      title={title}
      info={info}
      isActive={isActive}
    />
  );
};

const Card3 = () => {
  const { id, title, info, isActive } = dataCards[3];
  return (
    <CardMindMap
      key={nanoid()}
      id={id}
      title={title}
      info={info}
      isActive={isActive}
    />
  );
};

export { Card0, Card1, Card2, Card3 };
