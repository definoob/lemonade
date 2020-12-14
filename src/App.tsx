import { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './screens/Home/HomeContainer';
import Inbox from './screens/Inbox';
import CreateEvent from './screens/CreateEvent';
import NotFound from './screens/404';

import BottomBar from './components/BottomBar';

import configureStore from './redux/store/configureStore';
const store = configureStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/inbox" component={Inbox} />
          <Route exact path="/createevent" component={CreateEvent} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        <BottomBar />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
