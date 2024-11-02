"use client";
import { Input_porps } from "@/app/interfaces/common";
import React from "react";

const Input = ({
  id,
  className,
  inputonChange,
  checked,
  inputType,
  placeholder,
  inputName,
  value,
}: Input_porps) => {
  return (
    <input
      id={id}
      className={className}
      onChange={inputonChange}
      checked={checked}
      type={inputType}
      placeholder={placeholder}
      name={inputName}
      value={value}
    />
  );
};

export default Input;
