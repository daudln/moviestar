import { LoadingIndicator } from "@/components/loading-indicator";
import { useMovies } from "@/hooks/useMovie";
import { FlashList } from "@shopify/flash-list";
import { Link } from "expo-router";
import { ListItem, Text } from "tamagui";

export default function Explore() {
  const { data: movies, isLoading, error } = useMovies();
  return (
    <>
      {isLoading && <LoadingIndicator />}
      {error && <Text>{error.message}</Text>}
      {movies?.results && (
        <FlashList
          data={movies.results}
          renderItem={({ item }) => (
            <ListItem>
              <Link
                href={{
                  pathname: "/movies/[id]",
                  params: { id: item.id },
                }}
              >
                {item.title}
              </Link>
            </ListItem>
          )}
          estimatedItemSize={200}
        />
      )}
    </>
  );
}
