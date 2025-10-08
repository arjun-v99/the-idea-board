export interface Idea {
  id: number;
  name: string;
  upvotes: number;
}

export type ApiData = Idea[] | string; // string for error message

export interface ApiResponse<T = ApiData> {
  success: boolean;
  data: T;
}

export interface UpvoteData {
  id: number;
  name: string;
  upvotes: number;
}

export interface UpvoteResponse {
  success: boolean;
  message: string;
  data?: UpvoteData;
}
