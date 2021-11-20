import React from 'react';
import { Consumer } from '../context';
import TechCompo from './TechCompo';

export default function SkillStack() {

    return (
        <Consumer>
            {(value) => {
                const { Skill } = value;
                   const FinalSkillRow = [];
                   for (let i = 0; i < Skill.length / 4; i++) {
                     let Skillrow = Skill.slice(i * 4, (i + 1) * 4);
                     FinalSkillRow.push(
                       <div className="d-flex justify-content-around py-1">
                         {Skillrow.map((skill) => (
                           <TechCompo skill={skill} />
                         ))}
                       </div>
                     );
                   }

                
                
                
                 return (

        <div className="bg-primary w-100 my-5" id="Tstack">
            <div className="container text-center py-5">
                <h1 className="font-weight-light text-light">
                    <span className="text-light" style={{ fontWeight: "bold" }}>Technology  Stack</span> </h1>
                <div className="lead text-light" >I design, develop and deliver with these weapons </div>

               {FinalSkillRow}

            </div>

        </div>
    )
            }}
        </Consumer>
    );


 
   
}
