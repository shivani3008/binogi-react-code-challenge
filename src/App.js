import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from 'routes';

import SidebarMenu from 'components/common/SidebarMenu';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">The Recipe Collection</header>
      <SidebarMenu />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/recipes" />} />
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={<route.main />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
