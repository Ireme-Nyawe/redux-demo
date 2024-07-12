const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE";

// Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

// Initial state
const initialState = {
  numOfCakes: 10,
};

// Reducer
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
unsubscribe();
