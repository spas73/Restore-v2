import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({ required_error: "Name of product is required" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters" }),
  price: z.coerce
    .number({ required_error: "Price is required" })
    .min(100, "Price must be at least $1.00"),
  type: z.string({ required_error: "Type is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  quantityInStock: z.coerce
    .number({ required_error: "Quantity is required" })
    .min(1, "Quantity must be at least 1"),
  /* file: z.custom<File>(
    (val) => val instanceof File && val.size > 0,
    "A file must be uploaded"
  ), */
  /* file: z
    .any()
    .optional(),  */

  file: z
    .custom<File>((val) => val instanceof File && val.size > 0, {
      message: "A valid file is required",
    })
    .optional(),
});

/* export type CreateProductSchema = z.infer<typeof createProductSchema> & {
  file: File & { preview?: string };
}; */
export type CreateProductSchema = z.infer<typeof createProductSchema>;
