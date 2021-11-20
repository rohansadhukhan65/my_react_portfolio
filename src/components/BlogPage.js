import React from 'react'
import { Consumer } from '../context';
import ReactMarkdown from "react-markdown";

export default function BlogPage(props) {
    return ( 
      <Consumer>
        {(value)=>{
           const {Blog} = value;
           const id = props.match.params.id;
           const blogs = Blog.filter((blogs) => blogs.id == id)[0];
           const {imageUrl,Titlee,body} = blogs;

           return (
            <div className="container my-5 py-5">
              {/* Rendering part */}
              <div className=" justify-content-center  markdown">
                <div className="justify-content-center ">
                  <img src={imageUrl} alt={Titlee} className="img-fluid w-100 h-50" />
  
  
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
