import React,{ Suspense, lazy } from 'react';
/*
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
*/
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MenuH from './components/MenuH';
import Error404 from './components/Error404'

const HomePage = lazy(() => import('./pages/HomePage'));
const CvPage = lazy(() => import('./pages/CvPage'));

function App() {
  return (
    <BrowserRouter basename='/'>
      <Suspense fallback={<div>Loading...</div>}>
        <MenuH />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cvpage" element={<CvPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
