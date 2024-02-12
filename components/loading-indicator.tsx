import { Spinner, YStack, Text } from "tamagui";
export function LoadingIndicator() {
  return (
    <YStack padding="$3" alignItems="center" justifyContent="center">
      <Spinner size="large" />
      <Text>Loading...</Text>
    </YStack>
  );
}
