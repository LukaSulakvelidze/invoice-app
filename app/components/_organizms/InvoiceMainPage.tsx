"use client";
import React, { useEffect, useState } from "react";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { User } from "@/app/interfaces/common";
import Layout from "@/app/layouts/Layout";
import Invoices from "../_molecules/Invoices";
import NothingThere from "../_molecules/NothingThere";
import Filter_AddButton from "./Filter_AddButton";
import { getUser, isTokenExpired } from "@/app/service/requestFoos";
import { useRouter } from "next/navigation";
import CreateEditModal from "./CreateEditModal";

const InvoiceMainPage = () => {
  const [cookieAccessToken, setCookieAccessToken] = useState<string | null>();
  const [user, setUser] = useState<User>();
  const [windowWidth, setWindowWidth] = useState<number | undefined>();
  const [filterShow, setFilterShow] = useState(false);
  const [filter, setFilter] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

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
    if (window) {
      setWindowWidth(window.innerWidth);
    }

    setCookie("accesstoken", token);
    setCookieAccessToken(token);
    getUser(setUser);
  }, []);
  if (!cookieAccessToken) return;

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    setFilter((prevItems) => {
      if (isChecked) {
        return [...prevItems, value];
      } else {
        return prevItems.filter((item) => item !== value);
      }
    });
  };

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const filteredInvoices = user?.invoices.filter((invoice) =>
    filter.length > 0 ? filter.includes(invoice.status) : true
  );

  const navigateToInvoice = (invoiceId: string) => {
    router.push(`/myInvoice?id=${invoiceId}`);
  };

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
          filteredInvoices={filteredInvoices}
          setFilterShow={() => setFilterShow(!filterShow)}
          filterShow={filterShow}
          handleCheckboxChange={handleCheckboxChange}
          addInvoiceButton={() => setShowModal(!showModal)}
        />

        <div className="flex flex-col items-center gap-4 w-full max-h-[519px] pb-6 overflow-y-scroll mt-8">
          {filteredInvoices && filteredInvoices?.length > 0 ? (
            filteredInvoices.map((item) => {
              return (
                <Invoices
                  onClick={() => navigateToInvoice(item._id)}
                  key={Math.random()}
                  width={windowWidth}
                  amount={1000}
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
export default InvoiceMainPage;
