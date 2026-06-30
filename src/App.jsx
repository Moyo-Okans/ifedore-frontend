import React from 'react';
import AppRoutes from './router/route';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <AppRoutes/>
    </>
  )
}

export default App