import { z } from "zod"

export const CATEGORY_NAME_VALIDATOR = z
  .string()
  .min(1, "Name is required")
  .regex(
    /^[a-zA-Z0-9-]+$/,
    "Invalid name format. Category names can only contain letters, numbers, and hyphens."
  )
