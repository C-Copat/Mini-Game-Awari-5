import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Main from './Main'


import { MonsterHpProvider } from './components/context/MonsterHpContext';
import ConfigProvider from './components/context/ConfigContext';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider>
        <Main />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
