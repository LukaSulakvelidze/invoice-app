import React, { useState } from "react";
import CreateAndEditForm from "../_molecules/CreateAndEditForm";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Button from "../_atoms/Button";
import { CreateEditModal_props } from "@/app/interfaces/common";
import { validationSchema } from "@/app/yup_validation/validationSchema";
import { useFormik } from "formik";
import { sendEditRequest, sendPostRequest } from "@/app/service/requestFoos";

const CreateEditModal = ({
  id,
  invoice,
  modalTitle,
  goBackClick,
  create,
}: CreateEditModal_props) => {
  const [status, setStatus] = useState("");

  const formik = useFormik({
    initialValues: {
      billFrom: {
        streetAddress: `${!create ? invoice?.billFrom.streetAddress : ""}`,
        city: `${!create ? invoice?.billFrom.city : ""}`,
        postCode: `${!create ? invoice?.billFrom.postCode : ""}`,
        country: `${!create ? invoice?.billFrom.country : ""}`,
      },
      billTo: {
        clientName: `${!create ? invoice?.billTo.clientName : ""}`,
        clientEmail: `${!create ? invoice?.billTo.clientEmail : ""}`,
        streetAddress: `${!create ? invoice?.billTo.streetAddress : ""}`,
        city: `${!create ? invoice?.billTo.city : ""}`,
        postCode: `${!create ? invoice?.billTo.postCode : ""}`,
        country: `${!create ? invoice?.billTo.country : ""}`,
      },
      invoiceDate: `${!create ? invoice?.invoiceDate : ""}`,
      paymentTerms: `${!create ? invoice?.paymentTerms : ""}`,
      status: `${!create ? invoice?.status : ""}`,
      projectDescription: `${!create ? invoice?.projectDescription : ""}`,
    },
    validationSchema: validationSchema,
    onSubmit: () => {
      if (create) {
        setTimeout(() => {
          sendPostRequest(formik, status);
        }, 1000);
      } else {
        sendEditRequest(id, formik);
      }
    },
  });

  return (
    <div className="absolute flex w-full h-[92vh] desk:h-[100vh] -mt-8 tab:mt-[-62px] desk:-mt-20 -ml-6 tab:px-[-48px] tab:ml-[-48px] desk:ml-[-303px] overflow-y-scroll">
      <div className="flex flex-col gap-[26px] w-full tab:w-[616px] pt-[33px] rounded-tr-[20px] z-10 bg-white dark:bg-[#141625]">
        <div
          onClick={goBackClick}
          className="group flex items-center gap-6 w-fit cursor-pointer ml-6 tab:hidden"
        >
          <MdKeyboardArrowLeft className="text-[#7C5DFA]" />
          <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16] dark:text-white group-hover:text-[#888eb0]">
            Go back
          </span>
        </div>

        <h2
          className={`text-[24px] font-bold leading-[32px] tracking-[-0.5px] ml-6 tab:ml-[56px] text-[#0C0E16] dark:text-white`}
        >
          {modalTitle}
        </h2>
        <CreateAndEditForm formik={formik} />

        <div className="w-full h-[64px] mb-[-26px] bg-linearBack"></div>

        <div
          className={`flex items-center ${
            create ? "justify-between" : "justify-end"
          } w-full gap-2 h-[100px] px-6 py-5 rounded-br-[20px] bg-white dark:bg-[#1E2139] shadow-modalButtonShadow`}
        >
          <div className="flex justify-center items-center">
            <Button
              onClick={goBackClick}
              className={
                "text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex items-center justify-center  w-full h-full tab:w-[96px] px-4 py-4 rounded-[24px] text-[#7e88c3] dark:text-[#DFE3FA] hover:dark:text-[#7e88c3] bg-[#F9FAFE] hover:bg-[#DFE3FA] dark:hover:bg-white dark:bg-[#252945]"
              }
            >
              {create ? "Discard" : "Cancel"}
            </Button>
          </div>

          <div className="flex items-center gap-2 w-max">
            {create && (
              <Button
                onClick={() => {
                  formik.handleSubmit();
                  setStatus("Draft");
                }}
                className={
                  "text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex items-center justify-center w-max tab:w-[138px] pl-4 pr-[15px] pt-[18px] pb-[15px] rounded-[24px] text-[#888EB0] dark:text-[#DFE3FA] bg-[#373B53] hover:bg-[#0C0E16]"
                }
              >
                Save as Draft
              </Button>
            )}
            <Button
              onClick={() => {
                formik.handleSubmit();
                setStatus("Pending");
              }}
              className={
                "text-[15px] font-bold leading-[15px] tracking-[-0.25px] flex items-center justify-center w-max tab:w-[138px] pl-4 pr-[15px] pt-[18px] pb-[15px] rounded-[24px] text-white bg-[#7C5DFA] hover:bg-[#9277FF]"
              }
              buttonType="button"
            >
              {create ? "Save & Send" : "Save Changes"}
            </Button>
          </div>
        </div>
      </div>
      <div
        onClick={goBackClick}
        className="flex-grow bg-[rgba(0,0,0,0.2)]"
      ></div>
    </div>
  );
};

export default CreateEditModal;
