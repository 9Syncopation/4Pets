import { REMOVE, INCREASE, DECREASE, ADD_TO_CART, CLEAR_CART } from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE:
      // return new state
      return state.filter((item) => item.id !== action.payload);
    case INCREASE:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : { ...item };
      });
    case DECREASE:
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
    case ADD_TO_CART:
      const { id, name, gender, image } = action.payload;
      let pet = { id, name, gender, image, amount: 1 };
      return [...state, pet];

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default reducer;
