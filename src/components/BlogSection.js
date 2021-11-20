import React from 'react'
import { Consumer } from '../context';
import BlogCard from './BlogCard';
import { Link } from "react-router-dom";

export default function BlogSection() {
    
    return (
        <Consumer>
             {(value) => {
                const { Blog } = value;
                 return (
        <div className="container text-center my-5" id="Blog">
            <h1 className="font-weight-light">My<span className="text-primary font-weight-bold">Blogs</span></h1>
            <div className="lead">I Share my views on technologies in these blogs</div>
            <div className="row my-5 pt-3">

                {
                    Blog.slice(0,3).map((Blog) => (

                        < div key={Blog.id} className="col-12 col-md-4 my-2">
                            <BlogCard id={Blog.id} Titlee={Blog.Titlee} cardtext={Blog.cardtext} imageUrl={Blog.imageUrl} />
                        </div>
                    ))
                }

            </div>

            <div className="my-5 text-right">
                <Link to="/all-blog" style={{ textDecoration: "none" }}>
                    <h5>
                        See My Blog's <i className="fas fa-arrow-right align-middle"></i>
                    </h5>
                </Link>
            </div>



        </div>
    )
            }}
        </Consumer>
  )
    
}
