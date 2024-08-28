// apiUtils.ts

import { ApiResponse } from "../../../interface";

export function generateApiResponse<T>(
  success: boolean,
  description: string,
  content: T | null
): ApiResponse<T> {
  return {
    success,
    description,
    content,
  };
}
