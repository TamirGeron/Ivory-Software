const initialState = {
  accounts: [],
};

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ACCOUNTS":
      return { ...state, accounts: action.accounts };

    default:
      return state;
  }
}
