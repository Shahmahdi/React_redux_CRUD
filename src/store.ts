import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { RootReducer } from "./reducers/Index";

const initialState = {} as any;

const middleware = [thunk];

export const store = createStore(
  RootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
