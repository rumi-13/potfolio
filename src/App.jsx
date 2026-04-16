import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Education from "./components/Education";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="about" element={<About />} />
      </Route>,
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
