type APIResponse<T> = {
  status: string;
  code: number;
  total: number;
  data: T;
}

export type { APIResponse };