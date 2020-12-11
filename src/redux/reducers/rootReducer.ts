import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
