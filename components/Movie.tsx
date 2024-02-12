import Movie from "@/types/movie";
import { Card, H2, Paragraph } from "tamagui";
const DetailMovie = (movie: Movie) => (
  <Card>
    <Card.Header padded>
      <H2>{movie.title}</H2>
      <Paragraph theme="alt2">{movie.overview}</Paragraph>
    </Card.Header>
    <Card.Background />
  </Card>
);

export default DetailMovie;
