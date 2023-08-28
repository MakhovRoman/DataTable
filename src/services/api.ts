import axios from "axios";

export const API = {
  load: async (url: string) => {
    const data = await axios.get(`${url}/1,2,3`);

    return data.data;
  },
}
