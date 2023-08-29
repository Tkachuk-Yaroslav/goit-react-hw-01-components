import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// import Profile from './components/Profile';

//<Profile
// username={user.username}
// tag={user.tag}
//  location={user.location}
//  avatar={user.avatar}
// stats={user.stats}
// />;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
