import * as z from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name required (at least two letters)"),
  lastName: z.string().min(2, "Second name required"),
  email: z.string().email("Invalid email address"),
  address: z
    .string()
    .min(4, "Please write the address in detail (street, building, floor)"),
  cardNumber: z
    .string()
    .regex(/^(\d{4}\s?){4}$/, "The card number must be 16 digits."),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "The formula is incorrect. (MM/YY)"),
  cvc: z.string().regex(/^\d{3}$/, "The code (CVC) consists of 3 digits"),
});
