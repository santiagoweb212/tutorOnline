import { AuthToken } from "@/utils/authToken";
import { create } from "zustand";
import zukeeper from "zukeeper";
export const useAuthToken = create(zukeeper((set) => ({
  isAuthUser: AuthToken.getAuthToken(),
  logOutUser: () => {
    AuthToken.clearAuthToken();
    set({ isAuthUser: false });
  },
  setAuthToken: (token) => {
    AuthToken.setAuthToken(token);
    set({ isAuthUser: token });
  },
})));


window.Storage=useAuthToken

