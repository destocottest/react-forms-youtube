import { useState } from "react";

type InputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const initialFormValues = {
  email: "",
  username: "",
  password: "",
  color: "red",
  bio: "",
};

export const useForm = (initialValues = initialFormValues) => {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(e: React.ChangeEvent<InputElements>) {
    const { name, value, type } = e.target;

    // if name === "email" ==> validate that its an email
    if (type === "number") {
      setFormData({ ...formData, [name]: parseInt(value) });
    }

    setFormData({ ...formData, [name]: value });
  }

  function reset() {
    setFormData(initialFormValues);
  }

  return { formData, handleChange, reset };
};
