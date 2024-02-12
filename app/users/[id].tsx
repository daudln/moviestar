import { Text } from "tamagui";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { LoadingIndicator } from "@/components/loading-indicator";

import { useUser } from "@/hooks/useUser";
import Profile from "@/components/Profile";

const User = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: user, isLoading, error } = useUser(id);

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {error && <Text>{error.message}</Text>}
      {user && Profile(user)}
    </>
  );
};

export default User;
