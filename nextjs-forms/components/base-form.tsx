import { FormTitle } from "./form-title";

export const BaseForm = () => {
  return (
    <div>
      <FormTitle>Base Form</FormTitle>
      <form className="flex max-w-[350px] flex-col gap-5 rounded bg-white p-5 text-black">
        <div className="flex flex-col">
          <label htmlFor="cardholder">Cardholder&apos;s Name</label>
          <input className="rounded" type="text" id="cardholder" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardnumber">Card Number</label>
          <input className="rounded" type="number" id="cardnumber" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expdate">Valid thru</label>
          <input className="rounded" type="month" id="expdate" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv">CVV</label>
          <input className="rounded" type="number" id="cvv" />
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
};
