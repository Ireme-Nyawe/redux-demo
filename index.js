const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creator for cake
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "action for cake",
  };
}
// Action creator for icecream
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "action for icecream",
  };
}

// Initial state
const initialState = {
  numOfCakes: 10,
  numOfIcecream: 20,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);
console.log("Initial state", store.getState());

// Subscribe to store updates
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

// Dispatch actions, Call the action creator function
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
