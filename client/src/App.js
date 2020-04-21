import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ContactEdit from './pages/ContactEdit';
import ContactDetails from './pages/ContactDetails/ContactDetails';
import ContactPage from './pages/ContactPage/ContactPage';

const history = createBrowserHistory();

function App() {
  return (<Router history={history}>
    <div className="app">
      <Switch>
        <Route path="/contacts/new" component={ContactEdit} />
        <Route path="/contacts/edit/:id?" component={ContactEdit} />
        <Route path="/contacts/:id" component={ContactDetails} />
        <Route path="/contacts" component={ContactPage} />
        <Route exact path="/" component={ContactPage} />
      </Switch></div>
  </Router>
  );
}

export default App;
