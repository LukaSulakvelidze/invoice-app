"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./shadcn_popover/ui/popover";
import { Button } from "./shadcn_calendar/ui/button";
import { Calendar } from "./shadcn_calendar/ui/calendar";
import { DatePicker_props } from "@/app/interfaces/common";
import formatDate from "@/app/service/dateFormattHelper";

export function DatePicker({ formik }: DatePicker_props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "border border-[#DFE3FA] dark:border-[#252945] outline-none rounded-[4px] px-5 pt-[17px] pb-[15px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white dark:bg-[#1E2139]",
            !formik.values.invoiceDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {formik.values.invoiceDate ? (
            format(formik.values.invoiceDate, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={
            formik.values.invoiceDate
              ? new Date(formik.values.invoiceDate)
              : undefined
          }
          onSelect={(date) =>
            formik.setFieldValue(
              "invoiceDate",
              formatDate(date?.toDateString().split(" ").splice(1, 3))
            )
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
