import * as actions from '../actionTypes';

export interface EventsState {
  data: Array<actions.EventInterface>;
  isLoading: boolean;
  isError: boolean;
}

const initialState: EventsState = {
  data: [],
  isLoading: true,
  isError: false
};

export default function eventsReducer(
  state: EventsState = initialState,
  action: actions.EventsAction
) {
  switch (action.type) {
    case actions.SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case actions.FETCH_SUCCESS:
      return { ...state, data: action.data, isLoading: false, isError: false };
    case actions.FETCH_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
