import React, { Component } from 'react'

export default class Contact extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      describtion: "",
      subMsg: "",
      subMsgCol:"",
    };
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    });
  };
  
  onsubmit = (event) => {
    event.preventDefault();
    let isSucssesful = true;
    const { name } = this.state;

    if (isSucssesful) {
      this.setState({
        subMsg: `Thank You ${name}. I Will Contat You Soon 😊`,
        subMsgCol: "text-info",
      });
    } else {
      this.setState({
        subMsg: "Oops! . Something Went Wrong! Please try again later ☹️",
        subMsgCol: "text-danger",
      });
    }

   

  };

  render() {
    let { subMsg, subMsgCol } = this.state;
        return (
          <div className="container my-5 py-5" id="ContactID">
            <h1 className="font-weight-light text-center py-5">
              <span className="font-weight-bold text-primary">Thank you!</span>
              for your interest
            </h1>
            <div className="row justify-content-center">
              <div className="col-11 col-lg-5">
                <form onSubmit={this.onsubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input name="name" type="text" id="name" className="form-control shadow" onChange={this.onChange} required/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input name="email" type="email" id="email" className="form-control shadow" onChange={this.onChange} required/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="describtion">Tell me about your project *</label>
                    <textarea name="describtion" id="Msg" rows="5" className="form-control shadow" onChange={this.onChange} required></textarea>
                            </div>
                  <button type="submit" className="btn btn-primary shadow float-right"> Let's Talk Business</button>
                  <div className="py-5 mx-2 text-center">
                    <h5 className={subMsgCol}>{subMsg}</h5>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        );
    }
}
