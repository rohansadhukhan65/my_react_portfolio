import React from 'react';

export default function TechCompo(props) {
    const { SkillName, Skillicon, Startotal, Staractive } = props.skill;
    const StarList = [];
    for (let i = 0; i < Startotal; i++){
        if (i < Staractive) {
            StarList.push(<span className="text-light">★</span>)
        }
        else {
            StarList.push(<span className="text-dark">★</span>)
        }
    }

    return (

        <div>
            <div className="text-center">
                {/* Icon section & skill name */}
                <i className={Skillicon} style={{ height: "100px", width: "100px", color: "aliceblue" }}></i>
                <br />
                <span className="text-light text-center ">{SkillName} </span>
            </div>
            {/* Star section */}
            <div className="text-center">
                
                {StarList}

            </div>
        </div>
    )
}
