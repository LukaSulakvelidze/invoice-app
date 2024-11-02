import React from "react";
import Button from "../_atoms/Button";
import { deleteInvoiceRequest } from "@/app/service/requestFoos";
import { DeleteModal_props } from "@/app/interfaces/common";
import { useRouter } from "next/navigation";

const DeleteModal = ({
  invoice,
  setShowModalDelete,
  id,
}: DeleteModal_props) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="z-10 rounded-lg p-6 max-w-md w-[75%] sm:w-full space-y-4 shadow-lg bg-white dark:bg-[#1E2139]">
        <h2 className="text-[24px] font-bold text-[#0C0E16] dark:text-white">
          Confirm Deletion
        </h2>

        <p className="text-sm font-medium tracking-[-0.1px] text-[#888EB0] dark:text-[#DFE3FA]">
          Are you sure you want to delete invoice {invoice?.invoiceNumber}? This
          action cannot be undone.
        </p>

        <div className="flex justify-end space-x-3">
          <Button
            onClick={() => setShowModalDelete(false)}
            className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] pt-[18px] pb-[15px] px-6 rounded-[24px] text-[#7E88C3] dark:text-[#DFE3FAa] bg-[#F9FAFE] dark:bg-[#252945] hover:bg-[#E1E5EE]"
          >
            Cancel
          </Button>
          <Button
            onClick={() => deleteInvoiceRequest(id, router)}
            className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] pt-[18px] pb-[15px] px-6 rounded-[24px] bg-[#EC5757] text-white hover:bg-[#FF9797]"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
