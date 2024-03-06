"use client";
import { ReactElement } from "react";

interface ButtonProps {
  function: () => void;
  children: ReactElement;
}

const Button = function (props: ButtonProps) {
  return (
    <button className="" onClick={props.function}>
      {props.children}
    </button>
  );
};

export default Button;
