import React from 'react'
import { Consumer } from '../context';
import RecomCard from './RecomCard';

export default function Recomendation() {
    
    return (
        <Consumer>
            {(value) => {
                const { RecCard } = value;
                return (
                  <div className="container-fluid my-1">
                    <div className="row text-center py-1 d-flex flex-nowrap overflow-auto scrollbar">
                      {RecCard.map((RecCard) => (
                        <RecomCard RecCard={RecCard} />
                      ))}
                    </div>
                  </div>
                );
          }}  
       </Consumer>
   )
    
    
}
