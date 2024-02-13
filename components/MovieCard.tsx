import Movie from "@/types/movie";
import { Link } from "expo-router";
import { Card, H2, Image } from "tamagui";
import image from "@/utils/image";

const MovieCard = (movie: Movie) => (
  <Link
    asChild
    href={{
      pathname: "/movies/[id]",
      params: { id: movie.id },
    }}
  >
    <Card>
      <Card.Header>
        <H2>{movie.title}</H2>
      </Card.Header>
      <Image
        resizeMode="contain"
        alignSelf="center"
        borderRadius={16}
        source={{
          height: 300,
          width:300,
          uri: image(movie.poster_path),
        }}
      />
    </Card>
  </Link>
);

export default MovieCard;
