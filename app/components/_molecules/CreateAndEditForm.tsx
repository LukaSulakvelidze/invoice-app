import React from "react";
import Input from "../_atoms/Input";
import { CreateAndEditForm_props } from "@/app/interfaces/common";
import { DatePicker } from "./Calendar";

const CreateAndEditForm = ({ formik }: CreateAndEditForm_props) => {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-10 px-6 tab:px-[56px] w-full overflow-y-scroll scrollbar"
    >
      <div className="flex flex-col gap-6">
        <h3 className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA]">
          Bill From
        </h3>

        <div className="flex flex-col gap-[25px]">
          <label
            style={{
              color: `${
                formik.errors.billFrom?.streetAddress ? "#EC5757" : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Street Address
            <Input
              className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
              value={formik.values.billFrom.streetAddress}
              inputType="text"
              inputName={"billFrom.streetAddress"}
              inputonChange={formik.handleChange}
            />
            <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
              {formik.errors.billFrom?.streetAddress}
            </span>
          </label>

          <div className="flex flex-wrap justify-between gap-y-[25px]">
            <label
              style={{
                color: `${
                  formik.errors.billFrom?.city ? "#EC5757" : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              City
              <Input
                className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                value={formik.values.billFrom.city}
                inputType="text"
                inputName={"billFrom.city"}
                inputonChange={formik.handleChange}
              />
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.billFrom?.city}
              </span>
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billFrom?.postCode ? "#EC5757" : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Post Code
              <Input
                className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                value={formik.values.billFrom.postCode}
                inputType={"text"}
                inputName={"billFrom.postCode"}
                inputonChange={formik.handleChange}
              />
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.billFrom?.postCode}
              </span>
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billFrom?.country ? "#EC5757" : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-[100%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Country
              <Input
                className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                value={formik.values.billFrom.country}
                inputType={"text"}
                inputName={"billFrom.country"}
                inputonChange={formik.handleChange}
              />
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.billFrom?.country}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#7C5DFA]">
          Bill To
        </h3>

        <div className="flex flex-col gap-[25px]">
          <label
            style={{
              color: `${
                formik.errors.billTo?.clientName ? "#EC5757" : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Client&apos;s Name
            <Input
              className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
              value={formik.values.billTo.clientName}
              inputType={"text"}
              inputName={"billTo.clientName"}
              inputonChange={formik.handleChange}
            />
            <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
              {formik.errors.billTo?.clientName}
            </span>
          </label>
          <label
            style={{
              color: `${
                formik.errors.billTo?.clientEmail ? "#EC5757" : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Client&apos;s Email
            <Input
              className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
              value={formik.values.billTo.clientEmail}
              inputType={"text"}
              inputName={"billTo.clientEmail"}
              inputonChange={formik.handleChange}
            />
            <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
              {formik.errors.billTo?.clientEmail}
            </span>
          </label>
          <label
            style={{
              color: `${
                formik.errors.billTo?.streetAddress ? "#EC5757" : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Street Address
            <Input
              className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
              value={formik.values.billTo.streetAddress}
              inputType={"text"}
              inputName={"billTo.streetAddress"}
              inputonChange={formik.handleChange}
            />
            <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
              {formik.errors.billTo?.streetAddress}
            </span>
          </label>

          <div className="flex flex-wrap justify-between gap-y-[25px]">
            <label
              style={{
                color: `${formik.errors.billTo?.city ? "#EC5757" : "#7E88C3"}`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              City
              <Input
                className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                value={formik.values.billTo.city}
                inputType={"text"}
                inputName={"billTo.city"}
                inputonChange={formik.handleChange}
              />
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.billTo?.city}
              </span>
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billTo?.postCode ? "#EC5757" : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Post Code
              <Input
                className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                value={formik.values.billTo.postCode}
                inputType={"text"}
                inputName={"billTo.postCode"}
                inputonChange={formik.handleChange}
              />
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.billTo?.postCode}
              </span>
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billTo?.country ? "#EC5757" : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-[100%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Country
              <Input
                className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                value={formik.values.billTo.country}
                inputType={"text"}
                inputName={"billTo.country"}
                inputonChange={formik.handleChange}
              />
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.billTo?.country}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-between gap-y-[25px]">
          <label
            style={{
              color: `${formik.errors.invoiceDate ? "#EC5757" : "#7E88C3"}`,
            }}
            className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[42.7%] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Invoice Date
            <DatePicker formik={formik} />
            <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
              {formik.errors.invoiceDate}
            </span>
          </label>

          <div className="flex flex-col gap-2 w-full mob:w-[47%] tab:w-[42.7%]">
            <label
              style={{
                color: `${formik.errors.paymentTerms ? "#EC5757" : "#7E88C3"}`,
              }}
              className="relative flex flex-col gap-2 w-full text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Payment Terms
            </label>
            <div className="relative">
              <select
                value={formik.values.paymentTerms}
                name="paymentTerms"
                onChange={formik.handleChange}
                className="block appearance-none w-full border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
              >
                <option>Net 1 Day</option>
                <option>Net 7 Days</option>
                <option>Net 14 Days</option>
                <option>Net 30 Days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#7C5DFA]">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.05 8.293a1 1 0 011.414 0L10 9.828l1.536-1.535a1 1 0 111.414 1.414l-2.243 2.243a1 1 0 01-1.414 0L7.05 9.707a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
            <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
              {formik.errors.paymentTerms}
            </span>
          </div>
        </div>
        <label
          style={{
            color: `${
              formik.errors.projectDescription ? "#EC5757" : "#7E88C3"
            }`,
          }}
          className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
        >
          Project Description
          <Input
            className="border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
            value={formik.values.projectDescription}
            inputName={"projectDescription"}
            inputType={"text"}
            inputonChange={formik.handleChange}
          />
          <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
            {formik.errors.projectDescription}
          </span>
        </label>
      </div>
    </form>
  );
};

export default CreateAndEditForm;
