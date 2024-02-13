import ListSeparator from "@/components/ListSeparator";
import MovieCard from "@/components/MovieCard";
import TrendingBanner from "@/components/TrendingBanner";
import { LoadingIndicator } from "@/components/loading-indicator";
import { useMovies } from "@/hooks/useMovie";
import { FlashList } from "@shopify/flash-list";
import { Text } from "tamagui";

export default function Explore() {
  const { data: movies, isLoading, error } = useMovies();
  return (
    <>
      <TrendingBanner />
      {isLoading && <LoadingIndicator />}
      {error && <Text>{error.message}</Text>}
      {movies?.results && (
        <FlashList
          renderItem={({ item }) => MovieCard(item)}
          keyExtractor={item=>item.id.toString()}
          estimatedItemSize={50}
          data={movies.results}
          ItemSeparatorComponent={() => <ListSeparator />}
          // horizontal
        />
      )}
    </>
  );
}
