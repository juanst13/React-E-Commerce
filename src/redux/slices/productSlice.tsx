import { createSlice } from '@reduxjs/toolkit';

export interface ProductProps {
  title: string;
  image: string;
  price: number;
  discount: number;
  stock: number;
  seller: string;
  description: string;
  detail: {
    Gender: string;
    Series: string;
    Height: string;
    Mark: string;
  };
  questionsAndAswers: {
    Q1: string;
    Q2: string;
    A1: string;
    A2: string;
  };
}

const productInitialState: ProductProps = {
  title: '',
  image: '',
  price: 0,
  discount: 0,
  stock: 0,
  seller: '',
  description: '',
  detail: {
    Gender: 'Anime',
    Series: 'Naruto',
    Height: '12 cm',
    Mark: 'Shonen',
  },
  questionsAndAswers: {
    Q1: '',
    Q2: '',
    A1: '',
    A2: '',
  },
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
