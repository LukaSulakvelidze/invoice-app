import React from "react";
import Input from "../_atoms/Input";
import { Field, FieldArray, FormikProvider } from "formik";
import { CreateAndEditForm_props } from "@/app/interfaces/common";
import { DatePicker } from "./Calendar";
import { IoIosArrowDown } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import Button from "../_atoms/Button";

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
                formik.errors.billFrom?.streetAddress &&
                formik.touched.billFrom?.streetAddress
                  ? "#EC5757"
                  : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Street Address*
            <Input
              className={`border ${
                formik.errors.billFrom?.streetAddress &&
                formik.touched.billFrom?.streetAddress
                  ? "border-[#EC5757]"
                  : "border-[#DFE3FA] dark:border-[#252945]"
              }  outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
              value={formik.values.billFrom.streetAddress}
              inputType="text"
              inputName={"billFrom.streetAddress"}
              inputonChange={formik.handleChange}
            />
            {formik.errors.billFrom?.streetAddress &&
              formik.touched.billFrom?.streetAddress && (
                <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                  {formik.errors.billFrom?.streetAddress}
                </span>
              )}
          </label>

          <div className="flex flex-wrap justify-between gap-y-[25px]">
            <label
              style={{
                color: `${
                  formik.errors.billFrom?.city && formik.touched.billFrom?.city
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              City*
              <Input
                className={`border ${
                  formik.errors.billFrom?.city && formik.touched.billFrom?.city
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
                value={formik.values.billFrom.city}
                inputType="text"
                inputName={"billFrom.city"}
                inputonChange={formik.handleChange}
              />
              {formik.errors.billFrom?.city &&
                formik.touched.billFrom?.city && (
                  <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                    {formik.errors.billFrom?.city}
                  </span>
                )}
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billFrom?.postCode &&
                  formik.touched.billFrom?.postCode
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Post Code*
              <Input
                className={`border ${
                  formik.errors.billFrom?.postCode &&
                  formik.touched.billFrom?.postCode
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
                value={formik.values.billFrom.postCode}
                inputType={"text"}
                inputName={"billFrom.postCode"}
                inputonChange={formik.handleChange}
              />
              {formik.errors.billFrom?.postCode &&
                formik.touched.billFrom?.postCode && (
                  <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                    {formik.errors.billFrom?.postCode}
                  </span>
                )}
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billFrom?.country &&
                  formik.touched.billFrom?.country
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-[100%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Country*
              <Input
                className={`border ${
                  formik.errors.billFrom?.country &&
                  formik.touched.billFrom?.country
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
                value={formik.values.billFrom.country}
                inputType={"text"}
                inputName={"billFrom.country"}
                inputonChange={formik.handleChange}
              />
              {formik.errors.billFrom?.country &&
                formik.touched.billFrom?.country && (
                  <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                    {formik.errors.billFrom?.country}
                  </span>
                )}
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
                formik.errors.billTo?.clientName &&
                formik.touched.billTo?.clientName
                  ? "#EC5757"
                  : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Client&apos;s Name*
            <Input
              className={`border ${
                formik.errors.billTo?.clientName &&
                formik.touched.billTo?.clientName
                  ? "border-[#EC5757]"
                  : "border-[#DFE3FA] dark:border-[#252945]"
              } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
              value={formik.values.billTo.clientName}
              inputType={"text"}
              inputName={"billTo.clientName"}
              inputonChange={formik.handleChange}
            />
            {formik.errors.billTo?.clientName &&
              formik.touched.billTo?.clientName && (
                <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                  {formik.errors.billTo?.clientName}
                </span>
              )}
          </label>
          <label
            style={{
              color: `${
                formik.errors.billTo?.clientEmail &&
                formik.touched.billTo?.clientEmail
                  ? "#EC5757"
                  : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Client&apos;s Email*
            <Input
              className={`border ${
                formik.errors.billTo?.clientEmail &&
                formik.touched.billTo?.clientEmail
                  ? "border-[#EC5757]"
                  : "border-[#DFE3FA] dark:border-[#252945]"
              } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
              value={formik.values.billTo.clientEmail}
              inputType={"text"}
              inputName={"billTo.clientEmail"}
              inputonChange={formik.handleChange}
            />
            {formik.errors.billTo?.clientEmail &&
              formik.touched.billTo?.clientEmail && (
                <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                  {formik.errors.billTo?.clientEmail}
                </span>
              )}
          </label>
          <label
            style={{
              color: `${
                formik.errors.billTo?.streetAddress &&
                formik.touched.billTo?.streetAddress
                  ? "#EC5757"
                  : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Street Address*
            <Input
              className={`border  ${
                formik.errors.billTo?.streetAddress &&
                formik.touched.billTo?.streetAddress
                  ? "border-[#EC5757]"
                  : "border-[#DFE3FA] dark:border-[#252945]"
              } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
              value={formik.values.billTo.streetAddress}
              inputType={"text"}
              inputName={"billTo.streetAddress"}
              inputonChange={formik.handleChange}
            />
            {formik.errors.billTo?.streetAddress &&
              formik.touched.billTo?.streetAddress && (
                <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                  {formik.errors.billTo?.streetAddress}
                </span>
              )}
          </label>

          <div className="flex flex-wrap justify-between gap-y-[25px]">
            <label
              style={{
                color: `${
                  formik.errors.billTo?.city && formik.touched.billTo?.city
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              City*
              <Input
                className={`border ${
                  formik.errors.billTo?.city && formik.touched.billTo?.city
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
                value={formik.values.billTo.city}
                inputType={"text"}
                inputName={"billTo.city"}
                inputonChange={formik.handleChange}
              />
              {formik.errors.billTo?.city && formik.touched.billTo?.city && (
                <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                  {formik.errors.billTo?.city}
                </span>
              )}
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billTo?.postCode &&
                  formik.touched.billTo?.postCode
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Post Code*
              <Input
                className={`border ${
                  formik.errors.billTo?.postCode &&
                  formik.touched.billTo?.postCode
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
                value={formik.values.billTo.postCode}
                inputType={"text"}
                inputName={"billTo.postCode"}
                inputonChange={formik.handleChange}
              />
              {formik.errors.billTo?.postCode &&
                formik.touched.billTo?.postCode && (
                  <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                    {formik.errors.billTo?.postCode}
                  </span>
                )}
            </label>
            <label
              style={{
                color: `${
                  formik.errors.billTo?.country &&
                  formik.touched.billTo?.country
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="relative flex flex-col gap-2 w-[100%] tab:w-[154px] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Country*
              <Input
                className={`border ${
                  formik.errors.billTo?.country &&
                  formik.touched.billTo?.country
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px]  text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
                value={formik.values.billTo.country}
                inputType={"text"}
                inputName={"billTo.country"}
                inputonChange={formik.handleChange}
              />
              {formik.errors.billTo?.country &&
                formik.touched.billTo?.country && (
                  <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                    {formik.errors.billTo?.country}
                  </span>
                )}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-between gap-y-[25px]">
          <label
            style={{
              color: `${
                formik.errors.invoiceDate && formik.touched.invoiceDate
                  ? "#EC5757"
                  : "#7E88C3"
              }`,
            }}
            className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[42.7%] text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
          >
            Invoice Date*
            <DatePicker formik={formik} />
            {formik.errors.invoiceDate && formik.touched.invoiceDate && (
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.invoiceDate}
              </span>
            )}
          </label>

          <div className="relative flex flex-col gap-2 w-full mob:w-[47%] tab:w-[42.7%]">
            <label
              style={{
                color: `${
                  formik.errors.paymentTerms && formik.touched.paymentTerms
                    ? "#EC5757"
                    : "#7E88C3"
                }`,
              }}
              className="flex flex-col gap-2 w-full text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
            >
              Payment Terms*
            </label>
            <div className="relative">
              <select
                value={formik.values.paymentTerms}
                name="paymentTerms"
                onChange={formik.handleChange}
                className={`block cursor-pointer appearance-none w-full border ${
                  formik.errors.paymentTerms && formik.touched.paymentTerms
                    ? "border-[#EC5757]"
                    : "border-[#DFE3FA] dark:border-[#252945]"
                } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] transition-colors shadow-sm hover:bg-accent hover:text-accent-foreground text-[#7E88C3] dark:text-[#888EB0] dark:bg-[#1E2139]`}
              >
                <option>Net 1 Day</option>
                <option>Net 7 Days</option>
                <option>Net 14 Days</option>
                <option>Net 30 Days</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#7C5DFA]">
                <IoIosArrowDown />
              </div>
            </div>
            {formik.errors.paymentTerms && formik.touched.paymentTerms && (
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.paymentTerms}
              </span>
            )}
          </div>
        </div>
        <label
          style={{
            color: `${
              formik.errors.projectDescription &&
              formik.touched.projectDescription
                ? "#EC5757"
                : "#7E88C3"
            }`,
          }}
          className="relative flex flex-col gap-2 text-[13px] font-medium leading-[13px] tracking-[-0.1px] text-[#7E88C3] dark:text-[#888EB0]"
        >
          Project Description*
          <Input
            className={`border ${
              formik.errors.projectDescription &&
              formik.touched.projectDescription
                ? "border-[#EC5757]"
                : "border-[#DFE3FA] dark:border-[#252945]"
            } outline-none rounded-[4px] px-5 pt-[17px] pb-[15px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]`}
            value={formik.values.projectDescription}
            inputName={"projectDescription"}
            inputType={"text"}
            inputonChange={formik.handleChange}
            placeholder={"e.g. Graphic Design Service"}
          />
          {formik.errors.projectDescription &&
            formik.touched.projectDescription && (
              <span className="absolute right-0 top-0 text-[10px] font-semibold leading-[15px] tracking-[-0.2px] text-[#EC5757]">
                {formik.errors.projectDescription}
              </span>
            )}
        </label>
      </div>
      <FormikProvider value={formik}>
        <div className="flex flex-col">
          <FieldArray
            name="invoiceItems"
            render={(arrayHelpers) => (
              <>
                {formik.values.invoiceItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 mb-4 border-gray-300 pb-4"
                  >
                    <div className="flex flex-col gap-[9px]">
                      <p className="text-[13px] text-[#7E88C3] font-medium mt-[24px]">
                        Item Name
                      </p>
                      <Field
                        type="text"
                        className="w-[100%] h-[48px] pl-[20px] rounded-[4px] border border-[#DFE3FA] dark:border-[#252945] outline-none text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]"
                        name={`invoiceItems[${index}].itemName`}
                        placeholder="Enter item name..."
                      />
                    </div>
                    <div className="flex gap-[16px] items-center">
                      <div className="flex flex-col gap-[9px] w-[64px]">
                        <p className="text-[13px] text-[#7E88C3] font-medium mt-[24px]">
                          Qty.
                        </p>
                        <Field
                          className="w-[100%] h-[48px] pl-[20px] rounded-[4px] border-[1px] border-[#DFE3FA] border-solid outline-none bg-white dark:bg-[#1E2139] dark:border-[#252945] dark:text-white"
                          type="number"
                          min={0}
                          onInput={(
                            e: React.ChangeEvent<{ value: number | null }>
                          ) =>
                            (e.target.value =
                              !!e.target.value && Math.abs(e.target.value) >= 0
                                ? Math.abs(e.target.value)
                                : null)
                          }
                          name={`invoiceItems[${index}].itemQuantity`}
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] w-[31%]">
                        <p className="text-[13px] text-[#7E88C3] font-medium mt-[24px]">
                          Price
                        </p>
                        <Field
                          className="w-[100%] h-[48px] pl-[20px] rounded-[4px] border-[1px] border-[#DFE3FA] border-solid outline-none bg-white dark:bg-[#1E2139] dark:border-[#252945] dark:text-[white]"
                          type="number"
                          min={0}
                          onInput={(
                            e: React.ChangeEvent<{ value: number | null }>
                          ) =>
                            (e.target.value =
                              !!e.target.value && Math.abs(e.target.value) >= 0
                                ? Math.abs(e.target.value)
                                : null)
                          }
                          name={`invoiceItems[${index}].itemPrice`}
                          placeholder="Enter price"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px]">
                        <p className="text-[13px] text-[#7E88C3] font-medium mt-[24px]">
                          Total
                        </p>
                        <div className="flex gap-[64px]">
                          <p className="text-[#888EB0] text-[15px] font-bold">
                            $
                            {item.itemQuantity &&
                              item.itemPrice &&
                              item.itemQuantity * item.itemPrice}
                          </p>
                          {formik.values.invoiceItems.length > 1 && (
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              <ImBin2 className="text-[16px] text-[#888EB0] cursor-pointer" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    {formik.errors.invoiceItems?.[index] && (
                      <div className="text-red-500 text-sm">
                        {Object.values(
                          formik.errors.invoiceItems[index] || {}
                        ).join(", ")}
                      </div>
                    )}
                  </div>
                ))}
                <Button
                  className="w-full h-[48px] bg-gray-200 dark:bg-[#252945] text-[#888EB0] text-[15px] font-bold rounded-[24px] mt-[48px]"
                  buttonType="button"
                  onClick={() =>
                    arrayHelpers.push({
                      itemName: "",
                      itemQuantity: 0,
                      itemPrice: 0,
                    })
                  }
                >
                  Add Item
                </Button>
              </>
            )}
          />
        </div>
      </FormikProvider>
    </form>
  );
};

export default CreateAndEditForm;
