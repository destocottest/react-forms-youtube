import { FormTitle } from "@/components/form-title";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams: {
    choice: "nashi" | "ichigo" | "suika";
    show: string;
  };
};

// URL Redirect Form
export default function Page({ searchParams: { choice, show } }: PageProps) {
  const action = async (formData: FormData) => {
    "use server";
    const choice = formData.get("answer");
    redirect(`/forms/urlredirect?choice=${choice}&show=true`);
  };

  return (
    <div>
      <FormTitle>URL Redirect Form</FormTitle>
      <form
        className="flex w-[350px] flex-col gap-5 rounded-xl bg-white p-5 text-black"
        action={action}
      >
        <p>What is the Japanese word for strawberry?</p>
        <div className="flex flex-col gap-5">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="nashi"
              name="answer"
              defaultChecked={choice === "nashi"}
            />
            A nashi
            {show === "true" && choice === "nashi" && "❌"}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="ichigo"
              name="answer"
              defaultChecked={choice === "ichigo"}
            />
            A ichigo
            {show === "true" && choice === "ichigo" && "✅"}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="suika"
              name="answer"
              defaultChecked={choice === "suika"}
            />
            A suika
            {show === "true" && choice === "suika" && "❌"}
          </label>
        </div>
        <button
          type="submit"
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:enabled:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reveal Answer
        </button>
      </form>
    </div>
  );
}
