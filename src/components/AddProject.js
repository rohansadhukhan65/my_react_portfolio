import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from '../context';
import { v4 as uuid } from "uuid";

export default class AddProject extends Component {
  state = {
    imageUrl: "",
    Titlee: "",
    cardtext: "",
    body: "",
    sepratemssg: "",
    separatemsgtxtcolour: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onsubmit = (handler, event) => {
    event.preventDefault();
    let isSucssesful = true;

    if (isSucssesful) {
      this.setState({
        subMsg: `Your Project Is Published 😊`,
        subMsgCol: "text-info",
      });
    } else {
      this.setState({
        subMsg: "Oops! . Something Went Wrong! Please try again later ☹️",
        subMsgCol: "text-danger",
      });
    }

    const newProject = {
      id: uuid(),
      imageUrl: this.state.imageUrl,
      Titlee: this.state.Titlee,
      cardtext: this.state.cardtext,
      body: this.state.body,
    };

    handler("ADD_PROJECT", newProject);
  };

  onBodychange = (value) => {
    this.setState({
      body: value,
    });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { body, Titlee, imageUrl, subMsg, subMsgCol } = this.state;

          const { handler } = value;

          return (
            <div className="container-fluid my-5 py-5">
              <h1 className="text-center my-5 py-5 font-weight-light">
                <span className="text-primary font-weight-bold">Project</span>
              </h1>
              <div className="row px-3 px-lg-5">
                <div className="col-12 col-lg-6 px-lg-5">
                  <form onSubmit={this.onsubmit.bind(this, handler)}>
                    <div className="form-group">
                      <label htmlFor="imageUrl">Featured Image Url *</label>
                      <input
                        name="imageUrl"
                        type="text"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="Titlee">Title *</label>
                      <input
                        name="Titlee"
                        type="text"
                        id="Titlee"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="cardtext">cardtext *</label>
                      <input
                        name="cardtext"
                        type="text"
                        id="cardtext"
                        className="form-control"
                        onChange={this.onChange}
                        required
                      />
                    </div>
                    <SimpleMDE
                      onChange={this.onBodychange}
                      options={{
                        hideIcons: ["preview", "side-by-side", "fullscreen"],
                      }}
                    />
                    <button className="btn btn-primary btn-block my-5">
                      Publish
                    </button>
                  </form>
                  <div className="py-5 mx-2 text-center">
                    <h5 className={subMsgCol}>{subMsg}</h5>
                  </div>
                </div>
                {/* Rendering part */}
                <div className="col-12 col-lg-6 justify-content-center  markdown">
                  <div className="justify-content-center text-center">
                    <img
                      src={imageUrl}
                      alt={Titlee}
                      className="img-fluid justify-content-center text-center"
                    />
                  </div>
                  <h1 className="font-weight-light justify-content-center  text-center">
                    {Titlee}
                  </h1>

                  <ReactMarkdown source={body} />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
