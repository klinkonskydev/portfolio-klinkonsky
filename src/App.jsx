import './styles/default.scss'

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Loading } from './pages/Loading';

const Home = React.lazy( () => import('./pages/Home') )

export function App() {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route patch="/" exact component={Home} />
        </Switch>
      </React.Suspense>
    </>
  );
}