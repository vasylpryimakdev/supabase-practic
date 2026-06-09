import { ISubscription, IUser } from "@/interfaces";
import { create } from "zustand";

const usersGlobalStore = create((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user }),
  currentSubscription: null,
  setCurrentSubscription: (currentSubscription: ISubscription) =>
    set({ currentSubscription }),
}));

export default usersGlobalStore;

export interface IUsersGlobalStore {
  user: IUser | null;
  setUser: (user: IUser) => void;
  currentSubscription: ISubscription | null;
  setCurrentSubscription: (currentSubscription: ISubscription) => void;
}
