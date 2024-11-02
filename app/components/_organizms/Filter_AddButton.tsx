import React from "react";
import Input from "../_atoms/Input";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { Filter_AddButton_props } from "@/app/interfaces/common";

const Filter_AddButton = ({
  windowWidth,
  filteredInvoices,
  setFilterShow,
  filterShow,
  handleCheckboxChange,
  addInvoiceButton,
}: Filter_AddButton_props) => {
  const filterTypes = ["Draft", "Pending", "Paid"];
  return (
    <div className="flex justify-between items-center desk:w-full h-[54px]">
      <div className="flex flex-col gap-1 desk:gap-[6px]">
        <h1 className="text-[24px] tab:text-[36px] font-bold tracking-tighter tab:tracking-[-1.125px] h-[22px] tab:h-[33px] text-[#0C0E16] dark:text-white">
          Invoices
        </h1>
        <span className="text-[13px] font-medium tracking-[-0.1px] h-[15px] text-[#888EB0] dark:text-[#DFE3FA]">
          {windowWidth && windowWidth < 767
            ? `${filteredInvoices && filteredInvoices?.length} invoices`
            : `There are ${
                filteredInvoices && filteredInvoices?.length
              } total invoices`}
        </span>
      </div>
      <div className="flex justify-between items-center gap-[18px]">
        <div className="relative flex-col">
          <div
            onClick={() => setFilterShow(!filterShow)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="text-[15px] font-semibold tracking-tighter leading-[15px] text-[#0C0E16] dark:text-white">
              {windowWidth && windowWidth < 767 ? "Filter" : "Filter by status"}
            </span>
            <MdKeyboardArrowDown className="text-[#7C5DFA]" />
          </div>
          {filterShow && (
            <div className="absolute left-[-30px] top-[35px] flex flex-col justify-center gap-5 p-4 w-[200px] rounded-md shadow-filterModalLight dark:shadow-filterModalDark bg-white dark:bg-[#252945] ">
              {filterTypes.map((item, index) => {
                return (
                  <label key={index} className="container dark:text-white">
                    {item}
                    <Input
                      inputonChange={(e) =>
                        handleCheckboxChange(item, e.target.checked)
                      }
                      inputType={"checkbox"}
                    />
                    <span className="checkmark"></span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
        <div
          onClick={addInvoiceButton}
          className="flex items-center justify-between rounded-[24px] w-[90px] tab:w-[150px] py-[6px] tab:py-2 px-[6px] tab:px-2 cursor-pointer bg-[#7C5DFA]"
        >
          <div className="flex justify-center items-center w-8 h-8 rounded-[50%] bg-white">
            <BiPlus className=" text-[#7C5DFA]" />
          </div>
          <span className="text-[15px] font-bold tracking-[-0.25] leading-[15px] mr-2 text-white ">
            {windowWidth && windowWidth < 767 ? "New" : "New Invoice"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter_AddButton;
