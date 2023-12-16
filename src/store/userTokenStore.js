import { AuthToken } from "@/utils/authToken";
import { create } from "zustand";
import zukeeper from "zukeeper";
export const useAuthToken = create(zukeeper((set) => ({
  isAuthUser: AuthToken.getAuthToken(),
  logOutUser: () => {
    AuthToken.clearAuthToken();
    set({ isAuthUser: false });
  },
  
})));


window.Storage=useAuthToken

