"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const checkoutSchema = z.object({
  cardholder: z.string().min(2, "Cardholder is required"),
  cardnumber: z.coerce.number().min(2, "Cardnumber is required"),
  expdate: z.coerce.date(),
  cvv: z.coerce.number().min(111).max(999, "Invalid CVV"),
});
type TCheckoutSchema = z.infer<typeof checkoutSchema>;

export const ReactHookFormWithZodForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<TCheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    reValidateMode: "onSubmit",
  });

  const submit = async (values: TCheckoutSchema) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
    reset();
  };

  return (
    <div>
      <form
        className="flex max-w-[350px] flex-col gap-5 rounded bg-white p-5 text-black"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col">
          <label htmlFor="cardholder">Cardholder&apos;s Name</label>
          <input
            className="rounded"
            type="text"
            id="cardholder"
            {...register("cardholder")}
          />
          {errors.cardholder && (
            <p className="text-yellow-700">{errors.cardholder.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardnumber">Card Number</label>
          <input
            className="rounded"
            type="number"
            id="cardnumber"
            {...register("cardnumber")}
          />
          {errors.cardnumber && (
            <p className="text-yellow-700">{errors.cardnumber.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="expdate">Valid thru</label>
          <input
            className="rounded"
            type="month"
            id="expdate"
            {...register("expdate")}
          />
          {errors.expdate && (
            <p className="text-yellow-700">{errors.expdate.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv">CVV</label>
          <input
            className="rounded"
            type="number"
            id="cvv"
            {...register("cvv")}
          />
          {errors.cvv && (
            <p className="text-yellow-700">{errors.cvv.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:enabled:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isSubmitting}
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};
