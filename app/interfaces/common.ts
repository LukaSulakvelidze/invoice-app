import { FormikProps } from "formik";
import React from "react";

export interface Input_porps {
  id?: string;
  className?: string;
  inputonChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  checked?: boolean;
  placeholder?: string;
  inputName?: string;
  value?: string | readonly string[] | number;
}

export interface Button_props {
  className: string;
  onClick?: () => void;
  buttonType?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}

export interface Form_props {
  formik: FormikProps<signInDto> | FormikProps<signUpDto>;
  buttonTitle: string;
  signIn?: boolean;
  signUp?: boolean;
}

export interface signInDto {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface signUpDto {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Invoice_props {
  onClick: () => void;
  width: number | undefined;
  invoice: Invoice;
  amount: number;
}

export interface Filter_AddButton_props {
  windowWidth: number | undefined;
  filteredInvoices: Invoice[] | undefined;
  setFilterShow: React.Dispatch<React.SetStateAction<boolean>>;
  filterShow: boolean;
  handleCheckboxChange: (arg2: string, arg3: boolean) => void;
  addInvoiceButton: () => void;
}

export interface CreateEditModal_props {
  id?: string | null;
  invoice?: Invoice;
  modalTitle: string;
  goBackClick: () => void;
  create: boolean;
}

export type InvoceTypesForFormik = {
  billFrom: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  billTo: {
    clientName: string;
    streetAddress: string;
    clientEmail: string;
    city: string;
    postCode: string;
    country: string;
  };
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  status: string;
};

export interface CreateAndEditForm_props {
  formik: FormikProps<InvoceTypesForFormik>;
}
export interface DatePicker_props {
  formik: FormikProps<InvoceTypesForFormik>;
}

export interface DeleteModal_props {
  invoice: Invoice | undefined;
  setShowModalDelete: (arg: boolean) => void;
  id: string | null;
}

export interface Footer_props {
  invoice: Invoice | undefined;
  setShowModal: (arg: boolean) => void;
  showModal: boolean;
  id: string | null;
  setShowModalDelete: (arg: boolean) => void;
}

export interface InvoiceButtons_props {
  EditOnClick: () => void;
  PaidOnClick: () => void;
  DeleteOnClick: () => void;
  paidText: string;
}

export type Invoice = {
  _id: string;
  invoiceNumber: string;
  billFrom: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  };
  billTo: {
    clientName: string;
    streetAddress: string;
    clientEmail: string;
    city: string;
    postCode: string;
    country: string;
  };
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  status: string;
  userId: string;
};

export type User = {
  id: number;
  fullName: string;
  email: string;
  invoices: Invoice[];
};
