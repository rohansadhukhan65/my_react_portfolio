import React from 'react';
import ProjectCard from './ProjectCard';
import { Consumer } from '../context';
import { Link } from "react-router-dom";

export default function ProjectSection() {

  return (
    <Consumer>
      {(value) => {
        const { Project } = value;
        return (
          
          <div className="container text-center my-5" id="project">
            <h1 className="font-weight-light">
              My<span className="text-primary font-weight-bold">Projects</span>
            </h1>
            <div className="lead">I build websites just like these website</div>
            <div className="row my-5 pt-3">
              {Project.slice(0,3).map((Project) => (
                <div key={Project.id} className="col-12 col-md-4 my-2">
                  <ProjectCard  id={Project.id} Titlee={Project.Titlee} cardtext={Project.cardtext} imageUrl={Project.imageUrl} />
                </div>
              ))}
            </div>

            <div className="my-5 text-right">
              <Link to="/all-projects" style={{ textDecoration: "none" }}>
                <h5>
                  See My Projects 
                  <i className="fas fa-arrow-right align-middle"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
  

 
}
