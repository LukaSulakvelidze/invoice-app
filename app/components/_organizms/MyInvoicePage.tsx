"use client";
import { Invoice } from "@/app/interfaces/common";
import Layout from "@/app/layouts/Layout";
import {
  getInvoiceInfo,
  isTokenExpired,
  sendStatusChangeRequest,
} from "@/app/service/requestFoos";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Oval } from "react-loader-spinner";
import CreateEditModal from "./CreateEditModal";
import Button from "../_atoms/Button";
import InvoiceButtons from "../_molecules/InvoiceButtons";
import Footer from "../_molecules/Footer";
import DeleteModal from "../_molecules/DeleteModal";

function useInvoiceId() {
  const searchParams = useSearchParams();
  return searchParams.get("id");
}

function InvoicePageContent() {
  const id = useInvoiceId();
  const router = useRouter();

  const [cookieAccessToken, setCookieAccessToken] = useState<string | null>();
  const [windowWidth, setWindowWidth] = useState<number | undefined>();
  const [err, setErr] = useState(false);
  const [loader, setLoader] = useState(false);
  const [invoice, setInvoice] = useState<Invoice | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  useEffect(() => {
    setLoader(true);

    const token = getCookie("accesstoken");
    if (!token) {
      router.push("/auth/signIn");
      return;
    }

    if (isTokenExpired(token)) {
      deleteCookie("accesstoken");
      router.push("/auth/signIn");
      return;
    }

    if (!id) {
      setErr(true);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }

    if (window) {
      setWindowWidth(window.innerWidth);
    }

    setCookie("accesstoken", token);
    setCookieAccessToken(token);
    getInvoiceInfo(id, setInvoice, setErr, setLoader, router);
  }, [id, router]);

  if (!cookieAccessToken) return;

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const goBackPage = () => router.back();

  return (
    <Layout>
      {!err ? (
        <>
          {showModal && (
            <CreateEditModal
              id={id}
              invoice={invoice}
              modalTitle={`Edit ${invoice?.invoiceNumber}`}
              create={false}
              goBackClick={() => setShowModal(!showModal)}
            />
          )}
          <div
            onClick={goBackPage}
            className="group flex items-center gap-6 w-fit mb-8 cursor-pointer"
          >
            <MdKeyboardArrowLeft className="text-[#7C5DFA]" />
            <span className="text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16] dark:text-white group-hover:text-[#888eb0]">
              Go back
            </span>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between px-6 pb-7 pt-6 w-full rounded-lg shadow-lg bg-white dark:bg-[#1E2139]">
              <div className="flex items-center tab:gap-5 w-full justify-between tab:w-auto">
                <p className="text-[13px] font-medium leading-[15px] tracking-[-0.1px] text-[#858bb2] ">
                  Status
                </p>
                <Button
                  className={`flex items-center justify-center gap-2 w-[104px] h-10 text-[15px] font-bold leading-[15px] tracking-[-0.25px] rounded-md ${
                    invoice && invoice.status === "Pending"
                      ? "text-[#FF8F00] bg-[#fef8f1] dark:bg-[#2a2735]"
                      : invoice && invoice.status === "Paid"
                      ? "text-[#33D69F] bg-[#f5fdfa] dark:bg-[#212b3d]"
                      : "text-[#373B53] dark:text-[#DFE3FA] bg-[#f4f4f5] dark:bg-[#2a2c42]"
                  }`}
                >
                  <GoDotFill
                    className={` ${
                      invoice && invoice.status === "Pending"
                        ? "text-[#FF8F00]"
                        : invoice && invoice.status === "Paid"
                        ? "text-[#33D69F] "
                        : "text-[#373B53] dark:text-[#DFE3FA]"
                    }`}
                  />
                  {invoice && invoice.status}
                </Button>
              </div>

              {windowWidth && windowWidth >= 767 && (
                <div className="flex items-center justify-between w-full tab:w-auto tab:gap-2">
                  <InvoiceButtons
                    EditOnClick={() => setShowModal(!showModal)}
                    PaidOnClick={() =>
                      invoice?.status !== "Paid" && sendStatusChangeRequest(id)
                    }
                    paidText={
                      invoice?.status === "Paid" ? "Paid" : "Mark as Paid"
                    }
                    DeleteOnClick={() => setShowModalDelete(true)}
                  />
                </div>
              )}
            </div>

            {loader ? (
              <div className="flex justify-center w-full h-[100vh] py-[100px]">
                <Oval
                  visible={true}
                  height="80"
                  width="80"
                  color="#7C5DFA"
                  secondaryColor=""
                  ariaLabel="oval-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <div className="w-full p-6 rounded-lg shadow-lg bg-white dark:bg-[#1E2139]">
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[30px] sm:gap-0 sm:justify-between tab:flex-row tab:justify-between">
                  <div>
                    <p className="first-letter:text-[#7E88C3] text-[#0C0E16] dark:text-white text-15px font-bold ">
                      {invoice && invoice.invoiceNumber?.split("")}
                    </p>
                    <p className="text-[13px] font-medium text-[#7E88C3] dark:text-[#DFE3FA]">
                      {invoice && invoice.projectDescription}
                    </p>
                  </div>
                  <div className="flex flex-col w-fit">
                    <p className="block text-[13px] font-medium text-left tab:text-right text-[#7E88C3] dark:text-[#DFE3FA]">
                      {invoice && invoice.billFrom.streetAddress}
                    </p>
                    <p className="block text-[13px] font-medium text-left tab:text-right text-[#7E88C3] dark:text-[#DFE3FA]">
                      {invoice && invoice.billFrom.city}
                    </p>
                    <p className="block text-[13px] font-medium text-left tab:text-right text-[#7E88C3] dark:text-[#DFE3FA]">
                      {invoice && invoice.billFrom.postCode}
                    </p>
                    <p className="block text-[13px] font-medium text-left tab:text-right text-[#7E88C3] dark:text-[#DFE3FA]">
                      {invoice && invoice.billFrom.streetAddress}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap tab:flex-row justify-between gap-4 tab:gap-10 mt-8">
                  <div className="flex flex-col gap-8">
                    <div>
                      <h4 className="text-[13px] font-medium text-[#7E88C3] dark:text-[#DFE3FA]">
                        Invoice Date
                      </h4>
                      <p className="text-[15px] font-bold mt-3 text-[#0c0e16] dark:text-white">
                        {invoice && invoice.invoiceDate}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-medium text-[#7E88C3] dark:text-[#DFE3FA]">
                        Payment Due
                      </h4>
                      <p className="text-[15px] font-bold mt-3 text-[#0c0e16] dark:text-white">
                        {invoice && invoice.paymentTerms}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="text-[13px] font-medium text-[#7E88C3] dark:text-[#DFE3FA]">
                        Bill To
                      </h4>
                      <p className="text-[15px] font-bold mt-3 mb-2 text-[#0c0e16] dark:text-white">
                        {invoice && invoice.billTo.clientName}
                      </p>
                      <address className="text-[13px] font-medium not-italic text-[#7E88C3] dark:text-[#DFE3FA]">
                        {invoice && invoice.billTo.streetAddress}
                        <br />
                        {invoice && invoice.billTo.city}
                        <br />
                        {invoice && invoice.billTo.postCode}
                        <br />
                        {invoice && invoice.billTo.country}
                      </address>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div>
                      <h4 className="text-xs font-medium text-[#7E88C3]">
                        Sent to
                      </h4>
                      <p className="text-[15px] font-bold mt-3 text-[#0c0e16] dark:text-white">
                        {invoice && invoice.billTo.clientEmail}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-lg shadow-md overflow-hidden mt-9 bg-[#F9FAFE] dark:bg-[#252945]">
                  {windowWidth && windowWidth < 767 ? (
                    <div className="w-full max-h-[240px] overflow-y-scroll">
                      {invoice?.invoiceItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4"
                        >
                          <div>
                            <p className="font-bold text-[#0C0E16] dark:text-white">
                              {item.itemName}
                            </p>
                            <p className="text-[#7E88C3]">
                              {item.itemQuantity} x £{item.itemPrice}
                            </p>
                          </div>
                          <p className="font-bold text-[#0C0E16] dark:text-white">
                            £{`${item.itemQuantity * item.itemPrice}`}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="overflow-x-auto overflow-y-scroll max-h-[160px]">
                      <table className="w-full text-right border-collapse">
                        <thead>
                          <tr className="text-[#7E88C3]">
                            <th className="py-2 px-4 font-medium text-left text-[#7e88c3] dark:text-[#DFE3FA]">
                              Item Name
                            </th>
                            <th className="py-2 px-4 font-normal text-[#7e88c3] dark:text-[#DFE3FA]">
                              QTY.
                            </th>
                            <th className="py-2 px-4 font-normal text-[#7e88c3] dark:text-[#DFE3FA]">
                              Price
                            </th>
                            <th className="py-2 px-4 font-normal text-[#7e88c3] dark:text-[#DFE3FA]">
                              Total
                            </th>
                          </tr>
                        </thead>
                        {invoice?.invoiceItems.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td className="py-2 px-4 font-bold text-left text-[#0C0E16] dark:text-white">
                                {item.itemName}
                              </td>
                              <td className="py-2 px-4 font-medium text-[#7E88C3] dark:text-[#DFE3FA]">
                                {item.itemQuantity}
                              </td>
                              <td className="py-2 px-4 font-medium text-[#7E88C3] dark:text-[#DFE3FA]">
                                £{item.itemPrice}
                              </td>
                              <td className="py-2 px-4 font-bold text-[#0C0E16] dark:text-white">
                                £{`${item.itemQuantity * item.itemPrice}`}
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    </div>
                  )}
                  <div className="p-4 flex justify-between items-center text-white bg-[#373B53] dark:bg-[#0C0E16]">
                    <p className="text-sm">
                      {windowWidth && windowWidth < 767
                        ? "Grand Total"
                        : "Amount Due"}
                    </p>
                    <p className="text-lg font-bold">
                      £{" "}
                      {invoice?.invoiceItems
                        .map((item) => item.itemTotalPrice)
                        .reduce((a, b) => a + b, 0)}
                    </p>
                  </div>
                </div>

                {showModalDelete && (
                  <DeleteModal
                    invoice={invoice}
                    setShowModalDelete={setShowModalDelete}
                    id={id}
                  />
                )}
              </div>
            )}
          </div>

          {windowWidth && windowWidth < 767 && (
            <Footer
              setShowModal={setShowModal}
              showModal={showModal}
              invoice={invoice}
              id={id}
              setShowModalDelete={setShowModalDelete}
            />
          )}
        </>
      ) : (
        <div className="flex justify-center w-full h-[100vh] py-[100px]">
          <span className="text-[24px] font-bold leading-6 text-[#0c0e16] dark:text-[#ffff]">
            Something went wrong
          </span>
        </div>
      )}
    </Layout>
  );
}

export default function MyInvoicePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvoicePageContent />
    </Suspense>
  );
}
