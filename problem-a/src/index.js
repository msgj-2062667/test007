import React from 'react';
import ReactDOM from 'react-dom/client';
import senators from './data/senators.json';
import {App} from "./components/App"

//render the App component here!
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App senatorsList={senators}/>
  </React.StrictMode>,
  document.getElementById('root')
);