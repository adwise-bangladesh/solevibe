import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface CartItem {
  id: string;
  name: string;
  size: any;
  qty: number;
  sku: any;
  price: number;
  image: string;
}

interface removeItem {
  id: any;
  size: any;
}

interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface CartState {
  loading: boolean;
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  itemsPrice?: any;
  shippingPrice?: string;
  taxPrice?: string;
  totalPrice?: string;
  
}

const initialState: CartState = Cookies.get('cart')
  ? { ...JSON.parse(Cookies.get('cart')!), loading: true }
  : {
      loading: true,
      cartItems: [],
      shippingAddress: {} as ShippingAddress,
      paymentMethod: '',
      itemsPrice: 0
    };

const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2); // 12.3456 to 12.35
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // console.log('cart state:', state)
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x?.id === item?.id && x?.size == item?.size);
      if (existItem) {
        state.cartItems = state?.cartItems?.map((x) =>
          (x.id === existItem.id && x?.size == existItem?.size) ? item : x // check item existance
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      // state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
      // state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
      // state.totalPrice = addDecimals(
      //   Number(state.itemsPrice) +
      //     Number(state.shippingPrice) +
      //     Number(state.taxPrice)
      // );
      
      Cookies.set('cart', JSON.stringify(state));
      // console.log('cart:', Cookies.get('cart'))
    },

    removeFromCart: (state, action: PayloadAction<removeItem>) => {
      console.log('PayloadAction', action.payload)
      state.cartItems = state.cartItems.filter((x) => {
        console.log('item-x', x.id, x.size)
        return (x.id == action.payload.id && x.size == action.payload.size) ? false : true
      });
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice));
      state.totalPrice = addDecimals(
        Number(state.itemsPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );
      Cookies.set('cart', JSON.stringify(state));
    },

    saveShippingAddress: (state, action: PayloadAction<ShippingAddress>) => {
      state.shippingAddress = action.payload;
      Cookies.set('cart', JSON.stringify(state));
    },
    savePaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
      Cookies.set('cart', JSON.stringify(state));
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  hideLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
