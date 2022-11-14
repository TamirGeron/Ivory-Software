const initialState = {
  orgazes: [],
  // filterBy: {
  //   searchText: "",
  //   pageNum: 0,
  // },
};

export function orgazReducer(state = initialState, action) {
  let orgazes;
  switch (action.type) {
    case "SET_ORGAZES":
      return { ...state, orgazes: action.orgazes };
    case "REMOVE_ORGAZ":
      orgazes = [...state.orgazes];
      orgazes.splice(action.orgazIdx, 1);
      return { ...state, orgazes: orgazes };
    case "ADD_ORGAZ":
      orgazes = [action.orgaz, ...state.orgazes];
      return { ...state, orgazes: orgazes };
    case "UPDATE_ORGAZ":
      orgazes = [...state.orgazes];
      orgazes[action.orgaz.rowIdx] = action.orgaz;
      return { ...state, orgazes: orgazes };
    default:
      return state;
  }
}
