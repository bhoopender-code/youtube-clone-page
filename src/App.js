import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import db from './firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage'




function App() {


  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>

          <Route path="/search/">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
            {/* <h3>search page</h3> */}
          </Route>

          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
