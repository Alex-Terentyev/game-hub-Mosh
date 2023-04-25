import platforms from "../data/platforms";
import { Platform } from "./useGames";

const usePlatforms = () => ({ data: platforms, isLoading: null, error: null });

export default usePlatforms;
