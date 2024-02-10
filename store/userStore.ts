import {createStore} from "zustand";
import {} from "zustand/middleware";

const useUserStore = createStore<User>()(() => ({
    user: null,
}));

export default useUserStore