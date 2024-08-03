import {React, useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Writings from "./pages/Writings";
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import WritingDetail from './pages/WritingDetail';


function App() {

  const [projects, setProjects] = useState([]);
  const [writings, setWritings] = useState([]);

  const getWritings=()=>{
    fetch('/writings.json'
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
        setWritings(myJson)
      });
  }


  const getProjects=()=>{
    fetch('/projects.json'
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
    getWritings();
    getProjects();
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
          <Route path="writings" element={<Writings writings={writings} />} />
          <Route path="writings/:id" element={<WritingDetail writings={writings} />} />

        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
