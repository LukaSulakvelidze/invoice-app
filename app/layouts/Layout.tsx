import React from "react";
import Header from "../components/_organizms/Header";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col desk:w-full desk:h-[90vh] mt-8 tab:mt-[62px] desk:mt-20 px-6 tab:px-12 desk:px-[300px]">
        {children}
      </main>
    </>
  );
};

export default Layout;
