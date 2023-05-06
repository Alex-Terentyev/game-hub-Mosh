import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const trailer = data?.results[0];

  return trailer ? (
    <video src={trailer.data[480]} controls poster={trailer.preview} />
  ) : null;
};

export default GameTrailer;
