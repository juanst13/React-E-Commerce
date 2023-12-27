export const applyDiscount = (price: number, percent: number) => {
  const priceDiscount = price * (percent / 100);
  return price - priceDiscount;
};

export const formatMoney = (value: number) => {
  return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};
