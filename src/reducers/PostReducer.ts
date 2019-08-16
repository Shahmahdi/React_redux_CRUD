import { FETCH_POSTS, NEW_POST } from "../actions/Types";

const InitialState = {
  items: [],
  item: {}
}

export const PostReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}