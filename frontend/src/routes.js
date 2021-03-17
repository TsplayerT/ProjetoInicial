import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Page from './components/Home';

export default function Routes()
{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Page/>
        </Route>
        <PrivateRoute path="/login" component={() => <h1>Conectado</h1>} />
        <Route component={() => <h1>Página não encontrada</h1>} />
      </Switch>
    </BrowserRouter>
  );
}