import React from "react";
import Button from "../_atoms/Button";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Invoice_props } from "@/app/interfaces/common";

const Invoices = ({ onClick, date, width, invoice, amount }: Invoice_props) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-between items-center px-6 py-6 w-full shadow-filterModalLight dark:shadow-filterModalDark rounded-lg cursor-pointer bg-white dark:bg-[#1E2139]"
    >
      <div className="flex flex-col gap-6 w-[40%] sm:w-auto sm:flex-row sm:flex-wrap">
        <h2 className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] w-[80px] text-[#0C0E16] dark:text-white first-letter:text-[#7E88C3]">
          {invoice.invoiceNumber.split("")}
        </h2>

        <div className="flex flex-col gap-2 tab:gap-[50px] sm:flex-row sm:flex-wrap">
          <span className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-[#888EB0] dark:text-[#DFE3FA]">
            {date}
          </span>
          <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white">
            {width && width > 767
              ? `${invoice.billTo.clientName}`
              : "£" + ` ${amount}`}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center gap-7 tab:gap-10 w-[40%] sm:w-auto sm:flex-row sm:flex-wrap">
        <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white">
          {width && width > 767
            ? "£" + ` ${amount}`
            : `${invoice.billTo.clientName}`}
        </span>
        <Button
          className={`flex items-center justify-center gap-2 w-[104px] h-10 text-[15px] font-bold leading-[15px] tracking-[-0.25px] rounded-md ${
            invoice.status === "Pending"
              ? "text-[#FF8F00] bg-[#fef8f1] dark:bg-[#2a2735]"
              : invoice.status === "Paid"
              ? "text-[#33D69F] bg-[#f5fdfa] dark:bg-[#212b3d]"
              : "text-[#373B53] dark:text-[#DFE3FA] bg-[#f4f4f5] dark:bg-[#2a2c42]"
          }`}
        >
          <GoDotFill
            className={` ${
              invoice.status === "Pending"
                ? "text-[#FF8F00]"
                : invoice.status === "Paid"
                ? "text-[#33D69F] "
                : "text-[#373B53] dark:text-[#DFE3FA]"
            }`}
          />
          {invoice.status}
        </Button>
        {width && width > 767 && (
          <MdKeyboardArrowRight className="text-[#7C5DFA]" />
        )}
      </div>
    </div>
  );
};

export default Invoices;
