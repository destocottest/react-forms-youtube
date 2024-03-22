import { FormTitle } from "@/components/form-title";
import { SearchParamsForm } from "./search-params-form";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

// Search Params Form
export default function Page({ searchParams }: PageProps) {
  return (
    <main>
      <FormTitle>Search Params Form</FormTitle>
      <div className="mb-2 h-5 text-center">
        {searchParams.error && (
          <p className="text-yellow-700">{searchParams.error}</p>
        )}
        {searchParams.success && (
          <p className="text-green-700">{searchParams.success}</p>
        )}
      </div>
      <DisplayInformation color={searchParams.color} size={searchParams.size} />
      <SearchParamsForm
        defaultColor={searchParams.color}
        defaultSize={searchParams.size}
      />
    </main>
  );
}

type DisplayInformationProps = {
  color: string | string[] | undefined;
  size: string | string[] | undefined;
};

function DisplayInformation({ color, size }: DisplayInformationProps) {
  if (!color && !size) return <></>;

  return (
    <p
      data-color={color}
      className={
        "mb-2 rounded-xl bg-white p-5 text-center font-semibold tracking-tight text-black data-[color=beige]:bg-[#ddddc7] data-[color=navy]:bg-blue-950 data-[color=navy]:text-white"
      }
    >
      current style: {color && <span>color: {color}</span>}{" "}
      {size && <span>(size: {size})</span>}
    </p>
  );
}
