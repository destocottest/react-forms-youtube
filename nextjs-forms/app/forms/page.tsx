import Link from "next/link";
import { FormTitle } from "../../components/form-title";

const links = [
  { href: "/routehandler", label: "Route Handler" },
  { href: "/serveraction", label: "Server Action" },
  { href: "/validationaction", label: "Server Action /w Validation" },
];

export default function Forms() {
  return (
    <nav>
      <FormTitle>Forms</FormTitle>
      <ul className="flex flex-col items-center justify-center gap-y-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={`/forms/${href}`}
              className="block w-[300px] p-2 text-center text-xl font-semibold tracking-tight shadow shadow-white/10 transition hover:bg-white/[0.02] hover:opacity-90"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
