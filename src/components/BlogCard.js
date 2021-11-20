import React from 'react'
import { Link } from "react-router-dom";
export default function BlogCard(props) {
      const { id, Titlee, cardtext, imageUrl } = props;
    return (
        <div className="card shadow h-100">
            <img className="card-img-top" src={imageUrl} alt="Project" />
            <div className="card-body">
                <h4>{Titlee}</h4>
                <p className="card-text">{cardtext}</p>
                <Link to={`/BlogPage/${id}`} className="stretched-link" style={{ textDecoration: "none " }}>More</Link>
            </div>
        </div>
    )
}
