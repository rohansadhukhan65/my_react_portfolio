import React from 'react';

export default function RecomCard(props) {
    const { Name,designation,  Company, Messege } = props.RecCard;
    let aa;
    let msg;
  
    if (Messege.length > 33) {
        aa = "...";
        msg = Messege.slice(0, 33);
        return (

       <>

            <div className="col-12 col-md-4" data-toggle="modal" data-target="#exampleModal" >
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <h4 className="card-text">{msg}{aa}</h4>
                            <p className="card-text text-secondary-mb-0">{Name}</p>
                            <p className="card-text text-secondary">{designation} at {Company}</p>
                        </div>
                    </div>
            </div>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                                <h5>{Messege}</h5>
                                <p className="pt-5">{Name}</p>
                                <p>{Company}</p>
                        </div>
                       
                    </div>
                </div>
            </div>
           </>    

        )
    }
    else {
        return (
            <div className="col-12 col-md-4"  >
                <div className="card shadow h-100">
                    <div className="card-body">
                        <h4 className="card-text">{Messege}</h4>
                        <p className="card-text text-secondary-mb-0">{Name}</p>
                        <p className="card-text text-secondary">{Company}</p>
                    </div>
                </div>
            </div>
        )
    }


}
