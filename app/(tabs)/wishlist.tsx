import { ListItem, Text, YGroup } from "tamagui";
import React from "react";
import { useUsers } from "@/hooks/useUser";
import { LoadingIndicator } from "@/components/loading-indicator";

const Wishlist = () => {
  const { data: users, isLoading, error } = useUsers();

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {error && <Text>{error.message}</Text>}
      {users?.results && (
        <YGroup alignSelf="center" bordered width={240} size="$4">
          {users.results.map((user) => (
            <YGroup.Item key={user.id}>
              <ListItem hoverTheme>{user.name}</ListItem>
            </YGroup.Item>
          ))}
        </YGroup>
      )}
    </>
  );
};
export default Wishlist;
