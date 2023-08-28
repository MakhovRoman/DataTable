import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/app/App';
import "styles/index.scss";
import { Provider } from 'react-redux';
import { store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
