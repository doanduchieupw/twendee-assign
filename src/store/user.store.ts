import { create } from 'zustand';
import { IUser } from '../types/user.type';

interface UserState {
  user: IUser[];
  setUser: (data: IUser[]) => void;
  sortUser: (field: keyof IUser, type: 'asc' | 'desc') => void;
}

const useUser = create<UserState>((set) => ({
  user: [],
  setUser: (data) => set(() => ({ user: data })),
  sortUser: (field, type) =>
    set((state) => {
      let users = state.user || [];
      users.sort((a: IUser, b: IUser) => {
        let x = a[field] as string;
        let y = b[field] as string;

        if (x < y) return type === 'asc' ? -1 : 1;
        if (x > y) return type === 'asc' ? 1 : -1;
        return 0;
      });

      return { user: users };
    }),
}));

export default useUser;
