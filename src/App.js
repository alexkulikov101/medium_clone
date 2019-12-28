import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalFeed from './pages/GlodalFeed';
import Artical from './pages/Artical';
import TopBar from './components/TopBar';
import Auth from './pages/Auth';
import CurrentUserChecker from './components/CurrentUserChecker';
import { CurrentUserProvider } from './context/currentUser';

function App() {
  return (
    <div className='App'>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Switch>
              <Route path='/' exact component={GlobalFeed}></Route>
              <Route path='/login' exact component={Auth}></Route>
              <Route path='/register' exact component={Auth}></Route>
              <Route path='/articles/:slug' exact component={Artical}></Route>
            </Switch>
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
