"use client";

import { useFormState } from "react-dom";
import { completePurchase } from "./actions";
import { ServerActionSubmitBtn } from "./server-action-submit-btn";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const ServerActionForm = () => {
  const [formState, formAction] = useFormState(completePurchase, undefined);
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (ref.current && formState?.success) {
      ref.current.reset();
      setTimeout(() => {
        router.replace("/forms");
      }, 2000);
    }
  }, [formState, router]);

  return (
    <form
      className="flex max-w-[350px] flex-col gap-5 rounded bg-white p-5 text-black"
      action={formAction}
      ref={ref}
    >
      <div className="h-5 text-center">
        {formState?.error && (
          <p className="text-yellow-700">{formState?.error}</p>
        )}
        {formState?.success && (
          <p className="text-green-700">{formState?.success}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="cardholder">Cardholder&apos;s Name</label>
        <input
          className="rounded"
          type="text"
          id="cardholder"
          name="cardholder"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cardnumber">Card Number</label>
        <input
          className="rounded"
          type="number"
          id="cardnumber"
          name="cardnumber"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="expdate">Valid thru</label>
        <input className="rounded" type="month" id="expdate" name="expdate" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cvv">CVV</label>
        <input className="rounded" type="number" id="cvv" name="cvv" />
      </div>
      <ServerActionSubmitBtn />
    </form>
  );
};
