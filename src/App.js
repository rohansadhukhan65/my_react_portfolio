import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Title from './components/title';
import About from './components/about';
import Footer from './components/Footer';
import ProjectSection from './components/projectsection';
import BlogSection from './components/BlogSection';
import SkillStack from './components/SkillStack';
import Recomendation from './components/Recomendation';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecomendationWrite from './components/RecomendationWrite';
import "font-awesome/css/font-awesome.min.css";
import NotFound from './components/NotFound';
import ProjectPage from './components/ProjectPage';
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import addBlog from './components/addBlog';
import { Provider } from "./context";
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';
import Stt from './components/Stt';
 




function App() {

  return (


<Provider>
    <BrowserRouter>
    <Stt/>
      <NavBar />
      <Switch>
        <Route exact path="/">

          <Title name="Rohan Sadhukhan" leadtext="I am a freelancer from india" />
          <Recomendation />
          <SkillStack />
          <ProjectSection />
          <About />
          <BlogSection />
       
        </Route>
 
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/WriteRecomendtion" component={RecomendationWrite}></Route>
        <Route exact path="/all-projects" component={AllProjects}/>
        <Route exact path="/projectadd" component={AddProject}/>
        <Route exact path="/project/:id" component={ProjectPage}></Route>
        <Route exact path="/all-blog" component={AllBlogs}/>
        <Route exact path="/blogadd" component={addBlog} />
        <Route exact path="/BlogPage/:id" component={BlogPage}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>  

</Provider>

    
  );
}

export default App;

