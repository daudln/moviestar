import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Heading, YStack, Button, Input, Label, XStack } from 'tamagui'
import useUserStore from '../../store/userStore'


const Profile = () => {
  const [name, setName] = useState("")
  return (
    <YStack flex={1} justifyContent='center' alignItems='center' padding="$4" gap="$2">
      <Heading fontSize={26}>Profile</Heading>
        <XStack>
          <Label width={90} htmlFor="name">
            Name
          </Label>
          <Input flex={1} id="name" defaultValue="Nate Wienert" onChangeText={(name)=>setName(name)} />
        </XStack>
      <Input width={'100%'} />
      <Input />
      <Input />
      <Button paddingRight="$8" onPress={() => console.log(name)}>Button</Button>
    </YStack>
  )
}

export default Profile

const styles = StyleSheet.create({

})