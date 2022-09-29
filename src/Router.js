import React, { Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './components/_common/layout';

const wrapLayout = (Component) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

const Home = React.lazy(() => import('./components/home'));
const ApiTest = React.lazy(() => import('./components/apiTest'));
const Form = React.lazy(() => import('./components/form'));

const routes = [
  { path: '/', component: wrapLayout(Home) },
  { path: '/apiTest', component: wrapLayout(ApiTest) },
  { path: '/form', component: wrapLayout(Form) }
]

const App = () => (
  <BrowserRouter basename="/">
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {routes.map((route) => (
          <Route exact key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
