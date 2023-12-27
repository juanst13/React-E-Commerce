import { createSlice } from '@reduxjs/toolkit';

interface UserProps {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  avatar: string;
  phone: string;
}

const userInitialState: UserProps = {
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  password: '',
  avatar: '',
  phone: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    addUser: (state, action) => {
      const { firstName, lastName, userName, email, password, avatar, phone } =
        action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.userName = userName;
      state.email = email;
      state.password = password;
      state.avatar = avatar;
      state.phone = phone;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
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
    changeAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  addUser,
  changeEmail,
  changePassword,
  changePhone,
  changeAvatar,
  changeFirstName,
  changeLastName,
} = userSlice.actions;
