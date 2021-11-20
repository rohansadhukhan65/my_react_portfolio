import React, { Component } from 'react'
import { Consumer } from '../context';
import { v4 as uuid } from "uuid";

export default class RecomendationWrite extends Component {
     constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      company: "",
      designation: "",
      Recomendation: "",
      subMsg: "",
      subMsgCol: "",
    };
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    });
  };
  
  onsubmit = (handler,event) => {
    event.preventDefault();
    let isSucssesful = true;
    const { name } = this.state;
    
    if (isSucssesful) {
       this.setState({
         subMsg: `Thank You ${name}. For The Recomendation  😊`,
         subMsgCol: "text-info",
       });
    } else {
      this.setState({
        subMsg: "Oops! . Something Went Wrong! Please try again later ☹️",
        subMsgCol: "text-danger",
      });
    }

    const newRecom = {
      id: uuid(),
      name: this.state.name,
      Company: this.state.company,
      designation: this.state.designation,
      message: this.state.Recomendation,
    };

    handler("ADD_RECOMMENDATION", newRecom);
  };

  render() {

    return (
      <Consumer>
        {(value) => {
          let { subMsg, subMsgCol } = this.state;
          
          const { handler } = value;
          return (
             <div className="container my-5 py-5"  id="RecomID">
            <h1 className="font-weight-light text-center py-5">
              <span className="font-weight-bold text-primary">Thank you! </span>
               for your time
            </h1>
            <div className="row justify-content-center">
              <div className="col-11 col-lg-5">
                <form onSubmit={this.onsubmit.bind(this, handler)}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input name="name" type="text" id="name" className="form-control shadow" onChange={this.onChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input name="email" type="email" id="email" className="form-control shadow" onChange={this.onChange} />
                  </div>

                  <div className="form-group">
                                <label htmlFor="Company_Institution">Company/Institution *</label>
                    <input name="Company_Institution" type="text" id="Company_Institution" className="form-control shadow" onChange={this.onChange} />
                            </div>
                            
                             <div className="form-group">
                    <label htmlFor="Designation">Designation *</label>
                    <input name="Designation" type="text" id="Designation" className="form-control shadow" onChange={this.onChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Recomendation">Recomendation *</label>
                    <textarea name="Recomendation" id="Recomendation" rows="5" className="form-control shadow" onChange={this.onChange}></textarea>
                            </div>
                  <button  type="submit" className="btn btn-danger shadow float-right"> Lots Of Love!</button>
                  <div className="py-5 mx-2 text-center">
                    <h5 className={subMsgCol}>{subMsg}</h5>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          );
        }}
      </Consumer>
    );



   

    }
}
