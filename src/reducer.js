export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_FROM_BASKET":
      const idx = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (idx >= 0) {
        newBasket.splice(idx, 1);
      } else
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in basket!`
        );
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
