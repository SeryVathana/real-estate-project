import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createClient } from '@supabase/supabase-js';

import { store } from './redux/store';
import { Provider } from 'react-redux';

export const supabase = createClient(
  'https://hzwkasrjeagsucifqwsm.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6d2thc3JqZWFnc3VjaWZxd3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyOTAzOTEsImV4cCI6MjAxOTg2NjM5MX0.hwC3Ik9YgTo2bseGexrD6Ic1hWJvGbZJoD8uqPKdbqE'
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
