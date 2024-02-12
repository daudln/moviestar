import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Heading, YStack, Button, Input, Label, TextArea } from 'tamagui'


const Profile = () => {
  const [name, setName] = useState("")
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$4"
      gap="$2"
    >
      <Heading fontSize={26}>Profile</Heading>
      <YStack width={"100%"}>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          width={"100%"}
          id="first_name"
          placeholder="First Name"
          onChangeText={(name) => setName(name)}
        />
      </YStack>
      <YStack width={"100%"}>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          width={"100%"}
          id="last_name"
          placeholder="Last Name"
          onChangeText={(name) => setName(name)}
        />
      </YStack>
      <YStack width={"100%"}>
        <Label htmlFor="email">Email</Label>
        <Input
          width={"100%"}
          id="email"
          placeholder="Email"
          onChangeText={(name) => setName(name)}
        />
      </YStack>
      <YStack width={"100%"}>
        <Label htmlFor="Comment">Comment</Label>
        <TextArea
          width={"100%"}
          id="comment"
          placeholder="Comment"
          onChangeText={(name) => setName(name)}
        />
      </YStack>
      <Button width={"100%"} onPress={() => console.log(name)}>
        Button
      </Button>
    </YStack>
  );
}

export default Profile

const styles = StyleSheet.create({

})