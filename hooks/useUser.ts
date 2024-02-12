import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/user";
import APIClient from "../services/api.service";

const apiClient = new APIClient<User>("/users");
const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: apiClient.getAll,
  });

const useUser = (id: string) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => apiClient.get(id),
  });
};
export { useUsers, useUser };
