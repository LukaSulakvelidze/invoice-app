import React from "react";
import Button from "../_atoms/Button";
import { InvoiceButtons_props } from "@/app/interfaces/common";

const InvoiceButtons = ({
  EditOnClick,
  PaidOnClick,
  paidText,
  DeleteOnClick,
}: InvoiceButtons_props) => {
  return (
    <>
      <Button
        onClick={EditOnClick}
        className={
          "text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex items-center justify-center w-[20%] tab:w-[73px] px-[25px] py-4 rounded-[24px] text-[#7e88c3] dark:text-[#DFE3FA] hover:dark:text-[#7e88c3] bg-[#F9FAFE] hover:bg-[#DFE3FA] dark:hover:bg-white dark:bg-[#252945]"
        }
      >
        Edit
      </Button>
      <Button
        onClick={DeleteOnClick}
        className={
          "text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex items-center justify-center w-[30%] tab:w-[89px] px-[25px] py-4 rounded-[24px] text-white bg-[#EC5757] hover:bg-[#FF9797]"
        }
      >
        Delete
      </Button>
      <Button
        onClick={PaidOnClick}
        className={
          "text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex items-center justify-center w-[40%] tab:w-[131px] px-[23px] py-4 rounded-[24px] text-white bg-[#7C5DFA] hover:bg-[#9277FF]"
        }
      >
        {paidText}
      </Button>
    </>
  );
};

export default InvoiceButtons;
