import { ActionFunctionArgs } from "react-router-dom";

export const signupAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const values = Object.fromEntries(formData);
  // VALIDATION CHECK
  console.log(values);
  // SEND TO DATABASE OR API ...

  return null;
};
