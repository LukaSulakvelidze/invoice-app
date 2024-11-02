import Image from "next/image";
import React from "react";
import nothingThere from "../../../public/nothingThere.png";

const NothingThere = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-[70px]">
      <Image src={nothingThere} alt={"image"} />
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-[24px] font-bold tracking-[-0.75px] text-[#0C0E16] dark:text-white ">
          There is nothing here
        </h1>
        <p className="text-[13px] font-bold leading-[15px] tracking-[-0.1px] text-[#888EB0] dark:text-[#DFE3FA]">
          Create an invoice by clicking the New button and get started
        </p>
      </div>
    </div>
  );
};

export default NothingThere;
