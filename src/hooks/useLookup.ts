import { FetchResponse } from "../services/api-client";

interface Item {
  id?: number;
  name: string;
}

const useLookup = (data?: FetchResponse<Item>, itemId?: number) => {
  return data?.results.find((g) => g.id === itemId);
};

export default useLookup;
