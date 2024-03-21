"use server";

type FormState = { error?: string; success?: string } | undefined;

export async function completePurchase(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const formDataObj = Object.fromEntries(formData);

  console.log(formDataObj);
  const { cardholder, cardnumber, expdate, cvv } = formDataObj;

  if (!cardholder || !cardnumber || !expdate || !cvv) {
    return { error: "Please check your information again!" };
  }

  return { success: "Thank you for your purchase" };
}
