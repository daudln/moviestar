import { Text } from "tamagui";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { LoadingIndicator } from "@/components/loading-indicator";

import { useMovie } from "@/hooks/useMovie";
import DetailMovie from "@/components/Movie";

const User = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: movie, isLoading, error } = useMovie(id);

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {error && <Text>{error.message}</Text>}
      {movie && DetailMovie(movie)}
    </>
  );
};

export default User;
