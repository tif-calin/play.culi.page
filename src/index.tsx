import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Layout from './components/layout';
import HomePage from './views/home';

const CompostPage = React.lazy(() => import('./views/compost'));
const CashBoardPage = React.lazy(() => import('./views/cashboard'));
const CatfoodPriceObservationsPage = React.lazy(() => import('./views/cfpo'));
const TreeWhatPage = React.lazy(() => import('./views/treewhat'));

const page2repo: Record<string, { breadcrumbs?: string[], path?: string }> = {
  'home': {
    path: 'src/views/home'
  },
  'compost': {
    path: 'src/views/compost',
    // breadcrumbs: ['compost']
  },
  'cfpo': {
    path: 'src/views/cfpo'
  }
};

const routes = [
  ['compost', CompostPage],
  ['cashboard', CashBoardPage],
  ['cfpo', CatfoodPriceObservationsPage],
  ['treewhat', TreeWhatPage]
] as const;

const App = () => {
  const [href, setHref] = React.useState('');
  const config = page2repo[href];

  React.useEffect(() => {
    const listener = () => {
      setHref(window?.location?.href.split('/').slice(3).join('/'));
      console.log(window?.location?.href);
    };
    window.addEventListener('pageshow', listener);
    return () => window.removeEventListener('pageshow', listener);
  }, []);

  return (
    <Router>
      <Layout breadcrumbs={config?.breadcrumbs} path={config?.path}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {routes.map(([path, Page]) => (
            <Route key={path} path={`/${path}`} element={(
              <React.Suspense fallback={<>loading...</>}>
                <Page />
              </React.Suspense>
            )} />
          ))}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root container missing in index.html');
const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><App /></React.StrictMode>);
