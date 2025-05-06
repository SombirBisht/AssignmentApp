import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppDispatch } from './store';

export interface UserState {
  email: string;
  isLoaded: boolean;
}

const initialState: UserState = {
  email: '',
  isLoaded: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<{ email: string }>) => {
      state.email = action.payload.email
    },
    clearCredentials: (state) => {
      state.email = '';
    },
    setLoaded(state) {
      state.isLoaded = true;
    },
  }
})

export const { saveUser, clearCredentials, setLoaded } = authSlice.actions

export const loadCredentials = () => async (dispatch: AppDispatch) => {
  const email = await AsyncStorage.getItem('email');
  if (email) {
    dispatch(saveUser({ email }));
  }
  dispatch(setLoaded());
};

export const saveCredentials = (email: string) => async (dispatch: AppDispatch) => {
  await AsyncStorage.setItem('email', email);
  dispatch(saveUser({ email }));
};

export const logout = () => async (dispatch: AppDispatch) => {
  await AsyncStorage.clear();
  dispatch(clearCredentials());
};

export default authSlice.reducer

