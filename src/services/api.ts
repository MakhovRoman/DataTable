import axios from "axios";

export class ApiError extends Error {
  constructor(public message: string, public status: number) {
    super(message);

    this.name = "ApiError";
    this.status = status;
  }
}

export const API = {
  load: async (url: string) => {
    try {
      const data = await axios.get(`${url}`);

      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // ApiError, чтобы была возможность фильтровать ошибки, если нужно
        return Promise.reject(new ApiError(error.response.data.reason, error.response.status));
      }

      return Promise.reject(error);
    }
  },
}
