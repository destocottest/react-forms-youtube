"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type InputType = HTMLInputElement | HTMLSelectElement;

type SearchParamsFormProps = {
  defaultColor: string | string[] | undefined;
  defaultSize: string | string[] | undefined;
};

export const SearchParamsForm = ({
  defaultColor,
  defaultSize,
}: SearchParamsFormProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<InputType>) => {
    const params = new URLSearchParams(searchParams);
    const { name, value } = e.target;
    params.delete("error");
    params.delete("success");
    params.set(name, value);
    router.replace(`${pathname}?${params}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.delete("error");
    params.delete("success");

    const { color, size } = Object.fromEntries(params);

    if (!color || !size) params.set("error", "invalid style section");
    else {
      params.delete("color");
      params.delete("size");
      params.set("success", "successfully added to cart");
    }

    router.replace(`${pathname}?${params}`);
  };

  return (
    <div>
      <form
        className="flex w-[350px] flex-col gap-5 rounded-xl bg-white p-5 text-black"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="color">Color</label>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 border-b-4 border-[#ddddc7]">
              <input
                type="radio"
                id="beige"
                name="color"
                value="beige"
                checked={defaultColor === "beige"}
                onChange={handleChange}
              />
              <label htmlFor="beige">Beige</label>
            </div>
            <div className="flex items-center gap-2 border-b-4 border-blue-950">
              <input
                type="radio"
                id="beige"
                name="color"
                value="navy"
                checked={defaultColor === "navy"}
                onChange={handleChange}
              />
              <label htmlFor="navy">Navy</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="size">Size</label>
          <select
            defaultValue={defaultSize}
            name="size"
            id="size"
            className="rounded"
            onChange={handleChange}
          >
            <option value="">- Select -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded bg-black/80 px-4 py-2 font-bold text-white hover:enabled:bg-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to cart
        </button>
      </form>
    </div>
  );
};
