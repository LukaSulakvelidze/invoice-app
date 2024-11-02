import { Button_props } from "@/app/interfaces/common";
import React from "react";

const Button = ({ className, onClick, buttonType, children }: Button_props) => {
  return (
    <button onClick={onClick} className={className} type={buttonType}>
      {children}
    </button>
  );
};

export default Button;
