import {React, useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';


function App() {

  const [projects, setProjects] = useState([]);

  const getData=()=>{
    fetch('projects.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setProjects(myJson)
      });
  }
 
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects projects={projects} />} />
          <Route path="projects/:id" element={<ProjectDetail projects={projects} />} />
          <Route path="writing" element={<Writing />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
