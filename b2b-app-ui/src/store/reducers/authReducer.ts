import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStorageName } from '../../utils/constants';

export type IUserState = {
  user: {
    phoneNumber: string;
    role: 'user' | 'admin' | 'delivery';
    companyName: string;
    _id: string;
  };
  token?: string;
};

const getInitialStateFromLocalStorage = (): IUserState | undefined => {
  const localStorageJson = localStorage.getItem(localStorageName);
  if (localStorageJson) return JSON.parse(localStorageJson);
};
const localStorageData = getInitialStateFromLocalStorage();

const initialState: IUserState = {
  user: localStorageData?.user || {
    phoneNumber: '',
    companyName: '',
    role: 'user',
    _id: '',
  },
  token: localStorageData?.token || '',
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<IUserState>) => {
      state.token = action.payload.token;
      state.user.companyName = action.payload.user.companyName;
      state.user._id = action.payload.user._id;
      state.user.role = action.payload.user.role;
      state.user.phoneNumber = action.payload.user.phoneNumber;
      localStorage.setItem(localStorageName, JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.token = '';
      state.user.companyName = '';
      state.user._id = '';
      state.user.role = 'user';
      state.user.phoneNumber = '';

      localStorage.removeItem(localStorageName);
    },
  },
});

export default userAuthSlice;
