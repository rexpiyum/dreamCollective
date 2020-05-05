import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";

import CreateTopicView from './components/views/createTopic/CreateTopicView';
import SetupDreamActivityView from './components/views/createTopic/SetupDreamActivityView';
import SetupPromptsView from './components/views/createTopic/SetupPromptsView';
import LandingPage from "./components/landing/LandingPage"
import AllTopicsView from './components/views/allTopics/AllTopicsView';




function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/allTopics" component={AllTopicsView}/>
          <Route exact path="/newTopic/1" component={CreateTopicView} />
          <Route exact path="/newTopic/2/:id" component={SetupDreamActivityView} />
          <Route exact path="/newTopic/3/:id" component={SetupPromptsView} />

        </Switch>
    </div>
  );
}

export default App;
