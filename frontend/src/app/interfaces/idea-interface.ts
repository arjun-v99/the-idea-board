export interface Idea {
  id: number;
  name: string;
  upvotes: number;
  createdAt: string;
  updatedAt: string;
}

export type ApiData = Idea[] | string; // string for error message

export interface ApiResponse<T = ApiData> {
  success: boolean;
  data: T;
}
