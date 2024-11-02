"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoMdMoon } from "react-icons/io";
import MainIcon from "../../../public/headerIcon.png";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { userDeactivationRequest } from "@/app/service/requestFoos";

const Header = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [userModal, setUserModal] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.classList.add(systemTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header className="flex desk:flex-col desk:w-[103px] desk:h-[100vh] items-center justify-between desk:rounded-r-[20px] bg-[#373B53]">
      <div
        onClick={() => router.push("/")}
        className="w-[72px] tab:w-[80px] desk:w-[103px] h-[72px] tab:h-[80px] desk:h-[103px] cursor-pointer"
      >
        <Image className="w-full h-full" src={MainIcon} alt={"Main icon"} />
      </div>
      <div className="flex desk:flex-col items-center justify-center h-[72px] tab:h-[80px] desk:h-[103px]">
        <div
          onClick={toggleTheme}
          className="flex justify-center items-center w-[80px] h-[72px] tab:h-[80px] desk:h-[103px] border-r-[1px] desk:border-r-0 desk:border-b-[1px] border-r-[#494E6E] desk:border-b-[#494E6E] cursor-pointer"
        >
          {theme === "dark" ? (
            <GoDotFill className="w-5 h-5 tab:w-6 tab:h-6 text-[#858BB2] hover:text-[#DFE3FA]" />
          ) : (
            <IoMdMoon className="w-5 h-5 tab:w-6 tab:h-6 text-[#7E88C3] hover:text-[#DFE3FA]" />
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center w-[80px] h-[72px] tab:h-[80px] desk:h-[103px] cursor-pointer">
          <Image
            onClick={() => setUserModal(!userModal)}
            className="w-8 h-8 desk:w-10 desk:h-10 rounded-[50%]"
            src={MainIcon}
            alt={"Main icon"}
          />

          {userModal && (
            <ul className="absolute bottom-0 flex flex-col gap-2 translate-x-[-12%] translate-y-[120%] desk:translate-y-[-30%] desk:translate-x-[120%] text-end desk:text-start">
              <li
                className="text-[15px] font-medium leading-[15px] tracking-[-0.25px] text-[#0c0e16] dark:text-white"
                onClick={() => {
                  deleteCookie("accesstoken");
                  window.location.reload();
                }}
              >
                Log out
              </li>
              <li
                onClick={userDeactivationRequest}
                className="text-[15px] font-medium leading-[15px] tracking-[-0.25px] text-[#0c0e16] dark:text-white"
              >
                Account Deactivation
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
