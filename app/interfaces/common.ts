import { FormikProps } from "formik";
import React from "react";

export type ItemWithoutTotalPrice = Omit<Item, "itemTotalPrice">;

export type InvoiceWithoutNumberAndItemTotalPrice = Omit<
  Invoice,
  "invoiceNumber" | "invoiceItems" | "_id"
> & {
  invoiceItems: ItemWithoutTotalPrice[];
};

export type Item = {
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
  itemTotalPrice: number;
};

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
  invoiceItems: Item[];
};

export type User = {
  id: number;
  fullName: string;
  email: string;
  invoices: Invoice[];
};

export interface CreateAndEditForm_props {
  formik: FormikProps<InvoiceWithoutNumberAndItemTotalPrice>;
}
export interface DatePicker_props {
  formik: FormikProps<InvoiceWithoutNumberAndItemTotalPrice>;
}
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
  date: string;
  width: number | undefined;
  invoice: Invoice;
  amount: number;
}

export interface Filter_AddButton_props {
  windowWidth: number | undefined;
  filteredInvoices: Invoice[] | undefined;
  setFilterShow: React.Dispatch<React.SetStateAction<boolean>>;
  filterShow: boolean;
  handleCheckboxChange: (arg1: string, arg2: boolean) => void;
  filter: string[];
  addInvoiceButton: () => void;
}

export interface CreateEditModal_props {
  id?: string | null;
  invoice?: Invoice;
  modalTitle: string;
  goBackClick: () => void;
  create: boolean;
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
