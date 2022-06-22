import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from "recoil";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
      <RecoilRoot>
          <App />
      </RecoilRoot>
  </StrictMode>
);
