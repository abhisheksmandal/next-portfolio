import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this demo, we'll just simulate a success response.
  console.log("Form submitted successfully:", parsed.data);

  return { success: true };
}
