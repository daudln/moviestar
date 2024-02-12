import {create} from "zustand";
import {} from "zustand/middleware";

const useUserStore = create<User>()(() => ({
    user: null,
}));

export default useUserStore