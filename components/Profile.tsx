import { User } from "@/types/user";
import { Card, H2, Paragraph } from "tamagui";
const Profile = (user: User) => (
  <Card>
    <Card.Header padded>
      <H2>{user.name}</H2>
      <Paragraph theme="alt2">{user.username}</Paragraph>
    </Card.Header>
    <Card.Background />
  </Card>
);

export default Profile;
