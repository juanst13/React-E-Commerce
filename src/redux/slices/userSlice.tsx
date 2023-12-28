import { createSlice } from '@reduxjs/toolkit';

export interface UserProps {
  firstName: string;
  lastName: string;
  secondLastName: string;
  userName: string;
  email: string;
  avatar: string;
  phone: string;
}

const userInitialState: UserProps = {
  firstName: '',
  lastName: '',
  secondLastName: '',
  userName: '',
  email: '',
  avatar: '',
  phone: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    addUserStore: (state, action) => {
      const {
        firstName,
        lastName,
        secondLastName,
        userName,
        email,
        phone,
      } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.secondLastName = secondLastName;
      state.userName = userName;
      state.email = email;
      state.phone = phone;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePhone: (state, action) => {
      state.phone = action.payload;
    },
    changeFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    changeLastName: (state, action) => {
      state.lastName = action.payload;
    },
    changeSecondLastName: (state, action) => {
      state.secondLastName = action.payload;
    },
    changeAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  addUserStore,
  changeEmail,
  changePhone,
  changeAvatar,
  changeFirstName,
  changeLastName,
  changeSecondLastName,
} = userSlice.actions;
