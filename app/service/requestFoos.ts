import axios from "axios";
import {
  Invoice,
  InvoiceWithoutNumberAndItemTotalPrice,
  User,
} from "../interfaces/common";
import { jwtDecode } from "jwt-decode";
import { FormikProps } from "formik";
import { deleteCookie, getCookie } from "cookies-next";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const getUser = async (
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
) => {
  try {
    const cookies = getCookie("accesstoken");
    const res = await axios.get(
      "https://full-stack-inovice-back-nest.onrender.com/auth/current-user",
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );
    setUser(res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        console.log("Bad request");
      }
      if (error.response?.status === 401) {
        console.log("Unauthorizes access");
      }
    } else {
      console.log(error);
    }
  }
};

const deleteInvoiceRequest = async (
  id: string | null,
  router: AppRouterInstance
) => {
  try {
    const cookies = getCookie("accesstoken");
    await axios.delete(
      `https://full-stack-inovice-back-nest.onrender.com/invoice/${id}`,
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );
    router.push("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status) {
        console.log(error);
      }
    }
  }
};

const sendStatusChangeRequest = async (id: string | null) => {
  try {
    const cookies = getCookie("accesstoken");
    await axios.patch(
      `https://full-stack-inovice-back-nest.onrender.com/invoice/${id}`,
      {
        status: "Paid",
      },
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );
    window.location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status) {
        console.log(error);
      }
    }
  }
};

const getInvoiceInfo = async (
  id: string | null,
  setInvoice: React.Dispatch<React.SetStateAction<Invoice | undefined>>,
  setErr: React.Dispatch<React.SetStateAction<boolean>>,
  setLoader: React.Dispatch<React.SetStateAction<boolean>>,
  router: AppRouterInstance
) => {
  try {
    const cookies = getCookie("accesstoken");
    const res = await axios.get(
      `https://full-stack-inovice-back-nest.onrender.com/invoice/${id}`,
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );
    setInvoice(res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (
        error.status === 401 ||
        error.status === 400 ||
        error.status === 500
      ) {
        setErr(true);
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } else {
      console.log(error);
    }
  } finally {
    setLoader(false);
  }
};

const isTokenExpired = (token?: string): boolean => {
  if (!token) return true;
  try {
    const decodedToken: { exp?: number } = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp ? decodedToken.exp < currentTime : true;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

const sendPostRequest = async (
  formik: FormikProps<InvoiceWithoutNumberAndItemTotalPrice>,
  status: string
) => {
  try {
    const cookies = getCookie("accesstoken");
    await axios.post(
      `https://full-stack-inovice-back-nest.onrender.com/invoice/`,
      {
        billFrom: {
          streetAddress: formik.values.billFrom.streetAddress,
          city: formik.values.billFrom.city,
          postCode: formik.values.billFrom.postCode,
          country: formik.values.billFrom.country,
        },
        billTo: {
          clientName: formik.values.billTo.clientName,
          streetAddress: formik.values.billTo.streetAddress,
          clientEmail: formik.values.billTo.clientEmail,
          city: formik.values.billTo.city,
          postCode: formik.values.billTo.postCode,
          country: formik.values.billTo.country,
        },
        invoiceDate: formik.values.invoiceDate,
        paymentTerms: formik.values.paymentTerms,
        projectDescription: formik.values.projectDescription,
        status: status,
        invoiceItems: formik.values.invoiceItems.map((item) => {
          return {
            itemName: item.itemName,
            itemQuantity: item.itemQuantity,
            itemPrice: item.itemPrice,
          };
        }),
      },
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );
    window.location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status) {
        alert(`Error ${error.status}: ${error.message}`);
        console.log(error);
      }
    }
  }
};

const sendEditRequest = async (
  id: string | null | undefined,
  formik: FormikProps<InvoiceWithoutNumberAndItemTotalPrice>
) => {
  try {
    const cookies = getCookie("accesstoken");

    await axios.patch(
      `https://full-stack-inovice-back-nest.onrender.com/invoice/${id}`,
      {
        billFrom: {
          streetAddress: formik.values.billFrom.streetAddress,
          city: formik.values.billFrom.city,
          postCode: formik.values.billFrom.postCode,
          country: formik.values.billFrom.country,
        },
        billTo: {
          clientName: formik.values.billTo.clientName,
          streetAddress: formik.values.billTo.streetAddress,
          clientEmail: formik.values.billTo.clientEmail,
          city: formik.values.billTo.city,
          postCode: formik.values.billTo.postCode,
          country: formik.values.billTo.country,
        },
        invoiceDate: formik.values.invoiceDate,
        paymentTerms: formik.values.paymentTerms,
        projectDescription: formik.values.projectDescription,
        invoiceItems: formik.values.invoiceItems.map((item) => {
          return {
            itemName: item.itemName,
            itemQuantity: item.itemQuantity,
            itemPrice: item.itemPrice,
          };
        }),
      },
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );

    window.location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status) {
        alert(`Error ${error.status}: ${error.message}`);
        console.log(error);
      }
    }
  }
};

const userDeactivationRequest = async () => {
  try {
    const cookies = getCookie("accesstoken");
    await axios.delete(
      "https://full-stack-inovice-back-nest.onrender.com/users",
      {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      }
    );
    deleteCookie("accesstoken");
    window.location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status) {
        console.log(error);
      }
    }
  }
};
export {
  getUser,
  deleteInvoiceRequest,
  sendStatusChangeRequest,
  getInvoiceInfo,
  sendPostRequest,
  sendEditRequest,
  userDeactivationRequest,
  isTokenExpired,
};
