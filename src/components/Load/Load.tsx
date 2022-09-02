import React from "react";
import { LoadButton } from "./Load.style";

interface LoadProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Load = (props: LoadProps) => {
  return (
    <LoadButton onClick={() => props.onClick()}>{props.children}</LoadButton>
  );
};

export default Load;
