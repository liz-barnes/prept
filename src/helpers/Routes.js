import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import FlashCard from '../views/FlashCard';
import NotFound from '../views/NotFound';
import MyCards from '../views/MyCards';

export default function Routes() {
  return (
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home />}
        />
        <Route
          exact
          path='/flash-card'
          component={() => <FlashCard />}
        />
        <Route
          exact
          path='/my-cards'
          component={() => <MyCards />}
        />
        <Route component={NotFound} />
      </Switch>
  );
}
