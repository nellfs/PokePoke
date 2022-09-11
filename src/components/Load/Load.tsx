import React from 'react';
import { LoadButtonStyle } from './Load.style';

interface LoadButtonProps {
  children: React.ReactNode;
  visible: boolean;
  onClick: () => void;
}

const LoadButton = (props: LoadButtonProps) => {
  if (!props.visible) return <div></div>;
  return (
    <LoadButtonStyle onClick={() => props.onClick()}>
      {props.children}
    </LoadButtonStyle>
  );
};

export default LoadButton;
