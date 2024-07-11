const BUY_CAKE = "BUY_CAKE";
Action = {
  type: BUY_CAKE,
  info: "first redux action",
};

function buyCake() {
  return Action;
}

const initialState = {
  numOfCakes: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};
