import React from 'react'
import { Consumer } from '../context';
import ProjectCard from "./ProjectCard";

function AllProjects() {
    return (
        <Consumer>
            {(value) => {
                const { Project } = value;
                return (
                    
                        <div className="container text-center-py-5 my-5">
                            
                                <h1 className="text-center font-weight-light py-5">
                                    All my <span className="text-primary font-weight-bold">Projects</span>
                                </h1>
                       
                        <div className="row my-4 pt-4 px-5 ">
                             {Project.map((Project) => (
                               <div key={Project.id} className="col-12 col-md-6 my-2">
                                  <ProjectCard  id={Project.id} Titlee={Project.Titlee} cardtext={Project.cardtext} imageUrl={Project.imageUrl} />
                                </div>
                                 ))}
                        </div>  

                        </div>
                
                    
                );
            }}
        </Consumer>
    );
}




export default AllProjects;