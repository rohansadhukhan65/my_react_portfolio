import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {
    return (
      
        <nav className="navbar navbar-expand-md fixed-top bg-white shadow">

            <div className="container my-2">
                <Link to="/" className="navbar-brand text-primary font-weight-bold ">Rohan Sadhukhan</Link>

                
  


                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav">
                    <span className="fas fa-bars text-primary"></span>
                </button>

                <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
    
                    <div className="navbar-nav ">
                        <Link to="/contact" className="nav-item nav-link h6 text-primary my-auto text-center my-3 "><button className="btn btn-outline-info ml-auto mx-auto">Contact Me</button></Link>
                        
                        <Link to="/" className="nav-item nav-link h6 text-primary my-auto text-center mx-auto ">Home</Link>
   
                        <Link to="/all-projects" className="nav-item nav-link h6 text-primary my-auto text-center mx-auto"> Project's</Link>

                        <Link to="/all-blog" className="nav-item nav-link h6 text-primary my-auto text-center mx-auto ">Blogs</Link>
                    </div>
                </div>
            </div>




        </nav>
    );
}

export default NavBar;