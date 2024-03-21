import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href="/forms"
        className="rounded border px-2 py-1 text-3xl transition hover:bg-white hover:text-zinc-950"
      >
        All Forms
      </Link>
    </main>
  );
}
