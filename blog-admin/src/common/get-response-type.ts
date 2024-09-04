import { z } from "zod";

export default function getApiResponseType<DataType extends z.ZodTypeAny>(
  dataSchema: DataType
) {
  return z.object({
    success: z.boolean(),
    data: dataSchema,
    message: z.string(),
  });
}
