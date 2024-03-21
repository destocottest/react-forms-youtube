"use client";
import { useState } from "react";

const initialValues = {
  cardholder: "",
  cardnumber: "",
  expdate: "",
  cvv: "",
};

export const RouteHandlerForm = () => {
  const [formData, setFormData] = useState({ ...initialValues });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    /* VALIDATION */

    const response = await fetch("/api/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await response.json();

    if (json.error) {
      setError(json.error);
      setLoading(false);
      return;
    }

    if (json.success) {
      setSuccess(json.success);
      setLoading(false);
      setFormData({ ...initialValues });
      return;
    }
  };

  return (
    <div>
      <form
        className="flex max-w-[350px] flex-col gap-5 rounded bg-white p-5 text-black"
        onSubmit={handleSubmit}
      >
        <div className="h-5 text-center">
          {error && <p className="text-yellow-700">{error}</p>}
          {success && <p className="text-green-700">{success}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardholder">Cardholder&apos;s Name</label>
          <input
            className="rounded"
            type="text"
            id="cardholder"
            value={formData.cardholder}
            onChange={(e) =>
              setFormData({ ...formData, cardholder: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cardnumber">Card Number</label>
          <input
            className="rounded"
            type="number"
            id="cardnumber"
            value={formData.cardnumber}
            onChange={(e) =>
              setFormData({ ...formData, cardnumber: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="expdate">Valid thru</label>
          <input
            className="rounded"
            type="month"
            id="expdate"
            value={formData.expdate}
            onChange={(e) =>
              setFormData({ ...formData, expdate: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv">CVV</label>
          <input
            className="rounded"
            type="number"
            id="cvv"
            value={formData.cvv}
            onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:enabled:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Complete Purchase
        </button>
      </form>
    </div>
  );
};
