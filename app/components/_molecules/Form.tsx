import React from "react";
import Input from "../_atoms/Input";
import Button from "../_atoms/Button";
import { Form_props, signInDto, signUpDto } from "@/app/interfaces/common";

const Form: React.FC<Form_props> = ({
  formik,
  buttonTitle,
  signIn = false,
  signUp = false,
}) => {
  const handleEnterPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      onKeyDown={(e) => handleEnterPress(e)}
      className="flex flex-col justify-center  gap-2 w-full h-full"
    >
      {signUp && (
        <div className="flex flex-col gap-1 w-full">
          <Input
            className="text-[14px] font-semibold h-[56px] rounded-md pl-[19px] tracking-[.25px] outline-none outline-1 focus:outline-[#9277FF] border-[1px] border-solid 
            text-[#0C0E16] placeholder:text-[#3d3b48]"
            inputonChange={formik.handleChange}
            inputType="text"
            placeholder="Full Name"
            inputName="fullName"
            value={(formik.values as signUpDto).fullName || ""}
          />
          {(formik.errors as signUpDto).fullName &&
            (formik.errors as signUpDto).fullName && (
              <span className="text-red-500">
                {(formik.errors as signUpDto).fullName}
              </span>
            )}
        </div>
      )}

      <div className="flex flex-col gap-1 w-full">
        <Input
          className="text-[14px] font-semibold h-[56px] rounded-md pl-[19px] tracking-[.25px] outline-none outline-1 focus:outline-[#9277FF] border-[1px] border-solid 
        text-[#3d3b48] placeholder:text-[#3d3b48]"
          inputonChange={formik.handleChange}
          inputType="email"
          placeholder="Email"
          inputName="email"
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <span className="text-red-500">{formik.errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-1 w-full">
        <Input
          className="text-[14px] font-semibold h-[56px] rounded-md pl-[19px] tracking-[.25px] outline-none outline-1 focus:outline-[#9277FF] border-[1px] border-solid 
        text-[#3d3b48] placeholder:text-[#3d3b48]"
          inputonChange={formik.handleChange}
          inputType="password"
          placeholder="Password"
          inputName="password"
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && (
          <span className="text-red-500">{formik.errors.password}</span>
        )}
      </div>

      {signIn && (
        <div className="flex items-center gap-3 mt-3">
          <Input
            id="purple-checkbox"
            className="w-4 h-4 accent-[#7C5DFA]"
            inputonChange={formik.handleChange}
            inputType="checkbox"
            inputName="rememberMe"
            value={(formik.errors as signInDto).rememberMe ? "checked" : ""}
          />
          <label
            htmlFor="purple-checkbox"
            className="ms-2 text-sm font-medium text-[#3d3b48]"
          >
            Remember me?
          </label>
        </div>
      )}

      {signUp && (
        <div className="flex flex-col gap-1 w-full">
          <Input
            className="text-[14px] font-semibold h-[56px] rounded-md pl-[19px] tracking-[.25px] outline-none outline-1 focus:outline-[#9277FF] border-[1px] border-solid 
        text-[#3d3b48] placeholder:text-[#3d3b48]"
            inputonChange={formik.handleChange}
            inputType="password"
            placeholder="Confirm the password"
            inputName="confirmPassword"
            value={(formik.values as signUpDto).confirmPassword || ""}
          />
          {(formik.errors as signUpDto).confirmPassword &&
            (formik.errors as signUpDto).confirmPassword && (
              <span className="text-red-500">
                {(formik.errors as signUpDto).confirmPassword}
              </span>
            )}
        </div>
      )}

      <Button className="w-full h-10 rounded-md shadow-authButtonShadow text-white bg-[#7C5DFA]">
        {buttonTitle}
      </Button>
    </form>
  );
};

export default Form;
