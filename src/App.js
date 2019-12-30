import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalFeed from './pages/GlodalFeed';
import Article from './pages/Article';
import TagFeed from './pages/TagFeed';
import YourFeed from './pages/YourFeed';
import CreateArticle from './pages/CreateArticle';
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
              <Route path='/' exact component={GlobalFeed} />
              <Route path='/articles/new' component={CreateArticle} />
              <Route path='/feed' component={YourFeed} />
              <Route path='/tags/:slug' component={TagFeed} />
              <Route path='/login' component={Auth} />
              <Route path='/register' component={Auth} />
              <Route path='/articles/:slug' component={Article} />
            </Switch>
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
