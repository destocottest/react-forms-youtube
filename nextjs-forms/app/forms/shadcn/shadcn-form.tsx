"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactForm = z.object({
  firstName: z.string().min(2, "Enter first name (2+ chars)"),
  lastName: z.string().min(2, "Enter last name (2+ chars)"),
  email: z.string().email("Valid email needed"),
  message: z
    .string()
    .min(2, "Keep message between 2-255 chars")
    .max(255, "Keep message between 2-255 chars"),
});
type TContactForm = z.infer<typeof contactForm>;

export const ShadcnForm = () => {
  const form = useForm<TContactForm>({
    resolver: zodResolver(contactForm),
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const submit = (values: TContactForm) => {
    console.log(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="space-y-4 rounded bg-white/5 px-8 py-4 shadow shadow-white/5"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="e.g. Son"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="e.g. Goku"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  type="email"
                  placeholder="e.g. son.goku@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="text-black"
                  spellCheck={false}
                  placeholder="e.g. Enter your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
    </Form>
  );
};
