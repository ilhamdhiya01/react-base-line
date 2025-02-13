import type { AxiosError } from "axios";

import api from "../../lib/axios";

export const checkUser = async () => {
  try {
    const response = await api.get("/auth/check");
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    console.log("Error fetching user", err.response?.data);
  }
};
