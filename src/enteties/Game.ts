import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}
