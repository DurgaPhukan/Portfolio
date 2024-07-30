import React, { ReactNode, useEffect, useState } from "react";
import { MovableContainer, StyledBgContainer } from "./styles";

type BgContainerType = {
  children: ReactNode;
};

const BgContainer = (props: BgContainerType) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <StyledBgContainer>{props.children}</StyledBgContainer>;
};

export default BgContainer;
