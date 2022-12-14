const reducer = (state, action) => {
  let tempCart;

  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.amount += amount;
          cartTotal.total += price * amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, loading: false, cart: action.payload };

    case "TOGGLE_AMOUNT":
      let tempCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...item, amount: item.amount + 1 };
            } else if (action.payload.type === "dec") {
              return { ...item, amount: item.amount - 1 };
            }
          } else {
            return item;
          }
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart };

    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
