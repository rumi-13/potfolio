import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Skills from './components/Skills';
import Home from './components/Home';
import Education from './components/Education';
import About from './components/About';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Education" element={<Education/>}/>
         <Route path="About" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
