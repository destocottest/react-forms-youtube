import { FormTitle } from "@/components/form-title";
import { submitAction } from "./actions";

// Server Action Form
export default function Page() {
  return (
    <div>
      <FormTitle>Server Action Form</FormTitle>
      <form
        className="flex max-w-[350px] flex-col gap-5 rounded bg-white p-5 text-black"
        action={submitAction}
      >
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
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:enabled:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
}
