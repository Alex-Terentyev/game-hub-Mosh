import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "079612e4d1c84fcf8de2c54f44c6aa1e",
  },
});
