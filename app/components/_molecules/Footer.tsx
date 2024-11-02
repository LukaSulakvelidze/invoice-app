import React from "react";
import InvoiceButtons from "./InvoiceButtons";
import { sendStatusChangeRequest } from "@/app/service/requestFoos";
import { Footer_props } from "@/app/interfaces/common";

const Footer = ({
  setShowModal,
  showModal,
  invoice,
  id,
  setShowModalDelete,
}: Footer_props) => {
  return (
    <footer className="flex items-center justify-between py-6 px-6 mt-14 bg-white dark:bg-[#1E2139]">
      <InvoiceButtons
        EditOnClick={() => setShowModal(!showModal)}
        PaidOnClick={() =>
          invoice?.status !== "Paid" && sendStatusChangeRequest(id)
        }
        DeleteOnClick={() => setShowModalDelete(true)}
        paidText={invoice?.status === "Paid" ? "Paid" : "Mark as Paid"}
      />
    </footer>
  );
};

export default Footer;
