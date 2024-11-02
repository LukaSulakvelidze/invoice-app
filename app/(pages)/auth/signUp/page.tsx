"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { signUpValidation } from "@/app/yup_validation/validationSchema";
import { signUpDto } from "@/app/interfaces/common";
import Form from "@/app/components/_molecules/Form";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const signUpInputData: signUpDto = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const router = useRouter();

  const handleSubmit = async (data: signUpDto) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/sign-up", data);
      if (res.status === 201) {
        toast.success("User created successfuly");
        setTimeout(() => {
          router.push("/auth/signIn");
        }, 1000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("Unknonw Error");
      }
    }
  };

  const formik = useFormik({
    initialValues: signUpInputData,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: signUpValidation,
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#F8F8FB]">
      <div className="flex flex-col items-center p-4 rounded-md min-w-[340px] bg-white">
        <h1 className="text-3xl font-bold mb-4 text-[#0C0E16]">Sign Up</h1>
        <Form formik={formik} signUp={true} buttonTitle={"Sign Up"} />

        <span className="text-black mt-2">
          Already have an account?{" "}
          <Link className="underline" href={"/auth/signIn"}>
            Sign In
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
