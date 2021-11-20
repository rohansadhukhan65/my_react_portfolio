import React from 'react';
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";

 
function Footer() {
    
    return (
      <footer>
        <div className="container-fluid bg-primary text-center">
          {/*  <!-- first row --> */}
          <div className="row py-5">
            <div className="col-12">
              <h2 className="text-light">Interested in working with me?</h2>
              <Link to="/contact ">
                {" "}
                <button className="btn btn-outline-light btn-lg">
                  Let's Talk
                </button>{" "}
              </Link>
            </div>
          </div>

          {/* <!-- second row --> */}
          <div className="row">
            {/*  <!-- col 1 --> */}
            <div className="col-12 col-md-4 py-3 pb-3">
              <h5 className="text-light mb-3 ">More Links</h5>
              <Link
                className="text-light d-block"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                className="text-light d-block"
                to="/contact "
                style={{ textDecoration: "none" }}
              >
                Contact Me
              </Link>
              <Link
                className="text-light d-block"
                to="/project"
                style={{ textDecoration: "none" }}
              >
                Project's
              </Link>
              <Link
                className="text-light d-block"
                to="/#Blog"
                style={{ textDecoration: "none" }}
              >
                Blog's
              </Link>
              <Link
                className="text-light d-block"
                to="/WriteRecomendtion "
                style={{ textDecoration: "none" }}
              >
                Write a recommendation{" "}
                <i className="fas fa-heart text-light"></i>
              </Link>
            </div>
            {/* <!-- col 2 --> */}
            <div className="col-12 col-md-4 py-3 text-light text-justify">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                rerum soluta! In, voluptates! Animi sit vero consequatur
                pariatur assumenda? Ipsum blanditiis explicabo amet magni
                incidunt impedit distinctio nam eos quae architecto delectus
                corporis soluta debitis, illum ab provident corrupti
                exercitationem, nobis praesentium? A eius reiciendis enim labore
                doloribus cum quos.
              </p>
            </div>
            {/*  <!-- col 3 --> */}
            <div className="col-12 col-md-4 py-3">
              <h5 className="text-light mb-3">Social</h5>
              <center className="py-1">
                <a
                  href="https://www.linkedin.com/in/rohan-sadhukhan/"
                  target="blank"
                >
                  <i
                    className="fab fa-linkedin text-light shadow"
                    style={{ height: "6%", width: "6%" }}
                  ></i>
                </a>
              </center>
              <center className="py-3">
                <a href="https://github.com/rohansadhukhan65" target="blank">
                  <i
                    className="fab fa-github text-light shadow"
                    style={{ height: "6%", width: "6%" }}
                  ></i>
                </a>
              </center>
            </div>
          </div>

          {/*   <!-- third row --> */}
          <div className="row">
            <div className="col-12 py-3 text-light text-justify ">
              <p className="text-light text-center">
                {" "}
                Copyright © Rohan Sadhukhan 2021
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;