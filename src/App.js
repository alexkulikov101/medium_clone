import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalFeed from './pages/GlodalFeed';
import Artical from './pages/Artical';
import TagFeed from './pages/TagFeed';
import YourFeed from './pages/YourFeed';
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
              <Route path='/feed' component={YourFeed}></Route>
              <Route path='/tags/:slug' component={TagFeed}></Route>
              <Route path='/login' component={Auth}></Route>
              <Route path='/register' component={Auth}></Route>
              <Route path='/articles/:slug' component={Artical}></Route>
            </Switch>
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
