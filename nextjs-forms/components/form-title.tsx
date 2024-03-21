type FormTitleProps = {
  children: React.ReactNode;
};

export const FormTitle = ({ children }: FormTitleProps) => {
  return (
    <h1 className="mb-5 max-w-[350px] text-center text-3xl font-bold tracking-tight">
      {children}
    </h1>
  );
};
