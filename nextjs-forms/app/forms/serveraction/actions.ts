"use server";

import { redirect } from "next/navigation";

export const submitAction = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const formDataObj = Object.fromEntries(formData);
  console.log(formDataObj);

  // const cardholder = formData.get("cardholder");
  // const cardnumber = formData.get("cardnumber");
  // const expdate = formData.get("expdate");
  // const cvv = formData.get("cvv");
  // console.log({ cardholder, cardnumber, expdate, cvv });

  redirect("/forms");
};
