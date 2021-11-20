import React from 'react';
import { Consumer } from '../context';
import ReactMarkdown from "react-markdown";

export default function ProjectPage(props) {

  return (
    <Consumer>
      {(value) => {
        const {Project} = value;
        const id = props.match.params.id;
        const projects = Project.filter((projects) => projects.id == id)[0];
        const {imageUrl,Titlee,body} = projects;
        return (
          <div className="container my-5 py-5">
            {/* Rendering part */}
            <div className=" justify-content-center  markdown">
              <div className="justify-content-center ">
                <img src={imageUrl} alt={Titlee} className="img-fluid w-100" />


              </div>
              <h1 className="font-weight-light justify-content-center  text-center my-3">{Titlee}</h1>
              <ReactMarkdown source={body} />
            </div>
          </div>
        );
      }}
    </Consumer>
  );

}
