"use client";
import React, { Suspense, useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { Invoice, User } from "@/app/interfaces/common";
import Layout from "@/app/layouts/Layout";
import Invoices from "../_molecules/Invoices";
import NothingThere from "../_molecules/NothingThere";
import Filter_AddButton from "./Filter_AddButton";
import {
  getInvoices,
  getUser,
  isTokenExpired,
} from "@/app/service/requestFoos";
import { useRouter, useSearchParams } from "next/navigation";
import CreateEditModal from "./CreateEditModal";
import { Oval } from "react-loader-spinner";

const useInvoiceFilter = () => {
  const searchParams = useSearchParams();
  return searchParams.getAll("filter_status");
};

const InvoiceMainPageContent = () => {
  const filterParams = useInvoiceFilter();
  const router = useRouter();

  const [cookieAccessToken, setCookieAccessToken] = useState<string | null>(
    null
  );
  const [user, setUser] = useState<User>();
  const [invoices, setInvoices] = useState<Invoice[]>();
  const [windowWidth, setWindowWidth] = useState<number | undefined>();
  const [filterShow, setFilterShow] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
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

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    setCookie("accesstoken", token);
    setCookieAccessToken(token);

    getUser(setUser);
    getInvoices(filterParams, setInvoices);

    setFilter(filterParams.length > 0 ? filterParams[0].split(",") : []);
  }, []);

  useEffect(() => {
    const currentParams = filterParams.join(",");
    const newParams = filter.join(",");
    if (currentParams !== newParams) {
      if (filter.length) {
        const queryString = filter.map((item) => item).join(",");
        getInvoices(filter, setInvoices);
        router.push(`/?filter_status=${queryString}`);
      } else {
        getInvoices(filter, setInvoices);
        router.push("/");
      }
    }
  }, [filter, filterParams]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    setFilter((prev) =>
      isChecked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const navigateToInvoice = (invoiceId: string) => {
    router.push(`/myInvoice?id=${invoiceId}`);
  };

  if (!cookieAccessToken) return;

  return (
    <Layout>
      <>
        {showModal && (
          <CreateEditModal
            modalTitle="New Invoice"
            create={true}
            goBackClick={() => setShowModal(!showModal)}
          />
        )}
        <h1 className="text-[30px] tab:text-[48px] font-bold tracking-wider leading-[30px] text-[#7C5DFA] mx-auto mb-10">
          Welcome {user?.fullName.split(" ")[0]}
        </h1>
        <Filter_AddButton
          windowWidth={windowWidth}
          filteredInvoices={invoices}
          setFilterShow={() => setFilterShow(!filterShow)}
          filterShow={filterShow}
          handleCheckboxChange={handleCheckboxChange}
          filter={filter}
          addInvoiceButton={() => setShowModal(!showModal)}
        />

        <div className="flex flex-col items-center gap-4 w-full max-h-[519px] pb-6 overflow-y-scroll mt-8">
          {invoices && invoices?.length > 0 ? (
            invoices.map((item: Invoice) => {
              return (
                <Invoices
                  key={Math.random()}
                  onClick={() => navigateToInvoice(item._id)}
                  date={item.invoiceDate}
                  width={windowWidth}
                  amount={item.invoiceItems
                    .map((item) => item.itemTotalPrice)
                    .reduce((a, b) => a + b, 0)}
                  invoice={item}
                />
              );
            })
          ) : (
            <NothingThere />
          )}
        </div>
      </>
    </Layout>
  );
};

const InvoiceMainPage = () => (
  <Suspense
    fallback={
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
    }
  >
    <InvoiceMainPageContent />
  </Suspense>
);

export default InvoiceMainPage;
