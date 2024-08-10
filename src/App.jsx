import { React, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Writings from "./pages/Writings";
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import WritingDetail from './pages/WritingDetail';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import PocketBase from 'pocketbase';

function App() {
  const pb = new PocketBase('https://www-db.tunahan.at');
  const [projects, setProjects] = useState([]);
  const [writings, setWritings] = useState([]);


  const fetchProjectsAndWritings = async () => {
    const authData = await pb.admins.authWithPassword(
      import.meta.env.VITE_PB_EMAIL,
      import.meta.env.VITE_PB_PASSWORD
    );
    const recordsProjects = await pb.collection('projects').getFullList({
      sort: '-created',
    });
    const recordsWritings = await pb.collection('writings').getFullList({
      sort: '-created',
    });
    
    setProjects(recordsProjects);
    setWritings(recordsWritings);
    pb.authStore.clear();
  }

  useEffect(() => {
    fetchProjectsAndWritings();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home projects={projects} writings={writings} />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects projects={projects} />} />
            <Route path="projects/:id" element={<ProjectDetail projects={projects} />} />
            {
             /*
            <Route path="writings" element={<Writings writings={writings} />} />
            <Route path="writings/:id" element={<WritingDetail writings={writings} />} />
             */ 
            }
          </Route>
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
      <Footer />
    </>
  );
}

export default App;
