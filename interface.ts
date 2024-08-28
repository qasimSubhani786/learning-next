export interface ApiResponse<T> {
  success: boolean;
  description: string;
  content: T | null;
}
