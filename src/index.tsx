import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import './styles/index.css';
import HomePage from './views/home';

const page2repo: Record<string, string> = {
  // maps from page path to repo path
  'home': 'src/views/home',
};

const App = () => {
  const href = window?.location?.href.split('/').slice(3).join('/');

  return (
    <Router>
      <Layout path={page2repo[href]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
