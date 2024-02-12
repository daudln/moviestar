import Movie from "@/types/movie";
import APIClient from "./api.service";

const movieClient = new APIClient<Movie>("/movie/popular");

export default movieClient;