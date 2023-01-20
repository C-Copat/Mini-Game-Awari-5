import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MonsterHpProvider } from './MonsterHpContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MonsterHpProvider>
      <App />
    </MonsterHpProvider>
  </React.StrictMode>
);
