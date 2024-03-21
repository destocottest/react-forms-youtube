"use client";

import { useFormStatus } from "react-dom";

export const ServerActionSubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:enabled:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      Complete Purchase
    </button>
  );
};
