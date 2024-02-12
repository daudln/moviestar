import axios, { AxiosRequestConfig } from "axios";

export interface APIResponse<T> {
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  params: {},
});

class APIClient<T> {
  constructor(public endpoint: string) {}
  getAll = async (config: AxiosRequestConfig) => {
    const response = await axiosInstance.get<APIResponse<T>>(
      this.endpoint,
      config
    );
    return response.data;
  };
  get = async (id: number | string) => {
    const response = await axiosInstance.get<T>(`${this.endpoint}/${id}`);
    return response.data;
  };
}

export default APIClient;
