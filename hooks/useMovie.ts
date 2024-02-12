import { useQuery } from "@tanstack/react-query";
import movieClient from "@/services/movie.service";
import APIClient from "@/services/api.service";
import Movie from "@/types/movie";


const apiClient = new APIClient<Movie>("/movie")
const useMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: movieClient.getAll,
  });

const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movies", id],
    queryFn: () => apiClient.get(id),
  });
};
export { useMovies, useMovie };
