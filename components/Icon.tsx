import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color?: string;
}

export default function Icon(props: Props) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

