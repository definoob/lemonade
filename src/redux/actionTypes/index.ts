export const GET_DATA = 'GET_DATA';
export interface GetDataAction {
  type: typeof GET_DATA;
  longitude: number;
  latitude: number;
}

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  data: Array<Object>;
}

export const FETCH_FAILED = 'FETCH_FAILED';
export interface FetchFailedAction {
  type: typeof FETCH_FAILED;
}

export const SET_IS_LOADING = 'SET_IS_LOADING';
export interface SetIsLoadingAction {
  type: typeof SET_IS_LOADING;
  isLoading: boolean;
}

export type EventsAction =
  | GetDataAction
  | FetchSuccessAction
  | FetchFailedAction
  | SetIsLoadingAction;
