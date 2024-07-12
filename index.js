import { createStore, applyMiddleware, combineReducers } from 'redux';
import pkg from 'redux-logger';

const { createLogger } = pkg;

// Logger middleware
const logger = createLogger();

// Action types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action creators
export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "action for cake",
  };
}

export function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "action for icecream",
  };
}

// Initial states
const initialCakeState = {
  numOfCakes: 10,
};

const initialIceState = {
  numOfIcecreams: 20,
};

// Reducers
const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Create store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

// Subscribe to store updates
const unsubscribe = store.subscribe(() => {});

// Dispatch actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
