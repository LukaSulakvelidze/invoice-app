"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { signInValidation } from "@/app/yup_validation/validationSchema";
import { signInDto } from "@/app/interfaces/common";
import { setCookie } from "cookies-next";
import Form from "@/app/components/_molecules/Form";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const inputData: signInDto = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const router = useRouter();

  const handleSubmit = async (data: signInDto) => {
    try {
      const res = await axios.post("https://full-stack-inovice-back-nest.onrender.com/auth/sign-in", data);
      if (res.status === 201) {
        const accesstoken = res.data.accesstoken;
        setCookie("accesstoken", accesstoken);
        router.push("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.error("Email or Password is incorrect");
        }
      } else {
        toast.error("Unknonw Error");
      }
    }
  };

  const formik = useFormik({
    initialValues: inputData,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: signInValidation,
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#F8F8FB]">
      <div className="flex flex-col items-center p-4 rounded-md min-w-[340px] bg-white">
        <h1 className="text-3xl font-bold mb-4 text-[#0C0E16]">Sign In</h1>

        <Form formik={formik} signIn={true} buttonTitle={"Sign In"} />
        <span className="text-black mt-2">
          Need an account?{" "}
          <Link className="underline" href={"/auth/signUp"}>
            Sign Up
          </Link>
        </span>
      </div>
      <ToastContainer
        autoClose={1500}
        limit={3}
        pauseOnHover={false}
        newestOnTop={true}
      />
    </div>
  );
}
