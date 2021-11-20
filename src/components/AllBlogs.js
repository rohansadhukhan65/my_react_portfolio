
import React from 'react'
import { Consumer } from '../context';
import BlogCard from './BlogCard';


function AllBlogs() {
    
    return (
        <Consumer>
            {(value) => {
                const { Blog } = value;
                return (
                  
                    <div className="container text-center-py-5 my-5">
                            
                                <h1 className="text-center font-weight-light py-5">
                                    All my <span className="text-primary font-weight-bold">Blog's</span>
                                </h1>
                       
                        <div className="row my-4 pt-4 px-5 ">
                            {Blog.map((Blog) => (
                               
                                < div key={Blog.id} className="col-12 col-md-6 my-2">
                                    <BlogCard id={Blog.id} Titlee={Blog.Titlee} cardtext={Blog.cardtext} imageUrl={Blog.imageUrl} />
                        </div>
                                 ))}
                        </div>  

                        </div>
                    
                );
            }}
        </Consumer>
    );
}

export default AllBlogs;