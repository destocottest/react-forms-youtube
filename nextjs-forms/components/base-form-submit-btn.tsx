type BaseFormSubmitBtnProps = {
  children: React.ReactNode;
};

export const BaseFormSubmitBtn = ({ children }: BaseFormSubmitBtnProps) => {
  return (
    <button
      type="submit"
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition hover:enabled:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
};
