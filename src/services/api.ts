import axios from "axios";

export const API = {
  load: async (url: string) => {
    const data = await axios.get(`${url}`);

    return data.data;
  },
}
