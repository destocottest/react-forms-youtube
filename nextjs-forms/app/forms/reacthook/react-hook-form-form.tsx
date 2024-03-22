"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type Values = {
  cardholder: string;
  cardnumber: number;
  expdate: string;
  cvv: number;
};

export const ReactHookFormForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<Values>({
    reValidateMode: "onSubmit",
  });
  const watchCardholder = watch("cardholder");

  const submit = async (values: Values) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
    reset();
  };

  useEffect(() => {
    if (watchCardholder) {
      setValue(
        "cardholder",
        watchCardholder.charAt(0).toUpperCase() + watchCardholder.slice(1),
      );
    }
  }, [watchCardholder, setValue]);

  return (
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
          {...register("cardholder", {
            required: true,
            minLength: {
              value: 3,
              message: "cardholder name must be at least 3 characters",
            },
          })}
        />
        {errors.cardholder && (
          <p className="text-yellow-700">
            {errors.cardholder.message
              ? errors.cardholder.message
              : "INVALID CARDHOLDER NAME"}
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="cardnumber">Card Number</label>
        <input
          className="rounded"
          type="number"
          id="cardnumber"
          {...register("cardnumber", { required: true, minLength: 2 })}
        />
        {errors.cardnumber && (
          <p className="text-yellow-700">INVALID CARD NUMBER</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="expdate">Valid thru</label>
        <input
          className="rounded"
          type="month"
          id="expdate"
          {...register("expdate", { required: true })}
        />
        {errors.expdate && <p className="text-yellow-700">INVALID EXPDATE</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="cvv">CVV</label>
        <input
          className="rounded"
          type="number"
          id="cvv"
          {...register("cvv", { required: true, min: 100, max: 999 })}
        />
        {errors.cvv && <p className="text-yellow-700">INVALID CVV</p>}
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:enabled:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        disabled={isSubmitting}
      >
        Complete Purchase
      </button>
    </form>
  );
};
