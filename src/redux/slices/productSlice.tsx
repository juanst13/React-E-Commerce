import { createSlice } from '@reduxjs/toolkit';

export interface ProductProps {
  title: string;
  image: string;
  price: number;
  discount: number;
  stock: number;
  seller: string;
  description: string;
  detail: string;
  questionsAndAswers: {};
}

const productInitialState: ProductProps = {
  title: '',
  image: '',
  price: 0,
  discount: 0,
  stock: 0,
  seller: '',
  description: '',
  detail: '',
  questionsAndAswers: {},
};

export const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    addProduct: (state, action) => {
      const {
        title,
        image,
        price,
        discount,
        stock,
        seller,
        description,
        detail,
        questionsAndAswers,
      } = action.payload;
      state.title = title;
      state.image = image;
      state.price = price;
      state.discount = discount;
      state.stock = stock;
      state.seller = seller;
      state.description = description;
      state.detail = detail;
      state.questionsAndAswers = questionsAndAswers;
    },
  },
});

export default productSlice.reducer;
export const { addProduct } = productSlice.actions;
