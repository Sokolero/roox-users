import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Users } from './components/Users';
import Profile from './components/Profile';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Users />} />
        <Route path=":userId" element={<Profile />} />
      </Route>
    </Routes>
  );
}
