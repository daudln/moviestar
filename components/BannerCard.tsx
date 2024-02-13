import { Card, CardProps, H2, Image } from "tamagui";

export function BannerCard(props: CardProps) {
  return (
    <Card elevate size="$4" bordered {...props} width={"100%"}>
      <Card.Header padded>
        <H2 textAlign="center">Trending Movies</H2>
      </Card.Header>
      {/* <Card.Background>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: "https://media.themoviedb.org/t/p/w1920_and_h600_multi_faces/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
          }}
        />
      </Card.Background> */}
    </Card>
  );
}
