import React from 'react';
import Rohan from '../images/Rohan.png'

function Title(props) {
    const { name, leadtext } = props;
    /* const name = "Rohan Sadhukhan";
    const leadtext = "I am a freelancer from india"; */
    return (
        <div className="container">
        <div className="row text-center align-items-center my-5 py-5">
           {/*  <!-- image --> */}
            <div className="col-12 col-md-6">
                <img className="img-fluid rounded-circle w-75" src={Rohan} alt="Rohan"/>
            </div>
            {/* <!-- text --> */}
            <div className="col-12 col-md-6 pt-5">
                    <div className="font-weight-light" style={{ fontSize: "50px"}}>
                    Hi, im <span className="text-primary">{name}</span>
                </div>
                    <h4 className="font-weight-light">{leadtext}</h4>
            </div>
        </div>
    </div>
    );
}


export default Title;