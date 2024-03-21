import Link from "next/link";

export default function FormsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link
        href="/forms"
        className="absolute left-5 top-5 rounded border px-2 py-1 transition hover:bg-white hover:text-zinc-950"
      >
        All Forms
      </Link>
      {children}
    </>
  );
}
