import React , { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          Project: [newObject, ...this.state.Project],
        });
        break;

      case "ADD_BLOG":
        this.setState({
          Blog: [newObject, ...this.state.Blog],
        });
        break;

      case "ADD_RECOMMENDATION":
        this.setState({
          RecCard: [newObject, ...this.state.RecCard],
        });
        break;

      default:
        break;
    }
  };

  state = {
    handler: this.handler,

    Blog: [
      {
        id: 1,
        Titlee: "Blog 1",
        imageUrl: require("../src//images/blog1 .jpg"),
        cardtext: "This is my Blog about.....",
        body:"blog 1",
      },
      {
        id: 2,
        Titlee: "Blog 2",
        imageUrl: require("../src//images/blog2.jpg"),
        cardtext: "This is my Blog about.....",
        body:"blog 2",
      },
      {
        id: 3,
        Titlee: "Blog 3",
        imageUrl: require("../src//images/blog3.jpg"),
        cardtext: "This is my Blog about.....",
        body:"blog 3",
      },
    ],
    RecCard: [
      {
        id: 1,
        Name: "Random Guy 1",
        Company: " abc company",
        designation: "CEO",
        Messege:
          "He is a good engnineer . Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi assumenda aliquam cupiditate itaque mollitia vel, harum quibusdam! Quod, doloribus libero.",
      },
      {
        id: 2,
        Name: "Random Guy 2",
        Company: " abc company",
        designation: "Director",
        Messege: "He is an excellent developer!",
      },
      {
        id: 3,
        Name: "Random Guy 3",
        designation: " Manager ",
        Company: " abc company",
        Messege:
          "He is a Lazy person . Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi assumenda aliquam cupiditate itaque",
      },
      {
        id: 4,
        Name: "Random Guy 4",
        Company: " abce company",
        designation: "SDE",
        Messege: "He done things so nicely",
      },
      {
        id: 5,
        Name: "Random Guy 5",
        Company: " abc company",
        designation: "Something",
        Messege:
          "He fixed things quickly Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi assumenda aliquam cupiditate itaque",
      },
    ],
    Project: [
      {
        id: 1,
        Titlee: "Project 1",
        imageUrl: require("../src/images/projectone.png"),
        cardtext: "This is my project about.....",
        body: "Body 1",
      },
      {
        id: 2,
        Titlee: "Project 2",
        imageUrl: require("../src/images/projecttwo.png"),
        cardtext: "This is my project about.....",
        body: "Body 2",
      },
      {
        id: 3,
        Titlee: "Project 3",
        imageUrl: require("../src/images/projectthree.png"),
        cardtext: "This is my project about.....",
        body: "Body 3",
      },
      {
        id: 4,
        Titlee: "Project 4",
        imageUrl: require("../src/images/projectthree.png"),
        cardtext: "This is my project about.....",
        body: "Body 4",
      },
      {
        id: 5,
        Titlee: "Project 5",
        imageUrl: require("../src/images/projectthree.png"),
        cardtext: "This is my project about.....",
        body: "Body 5",
      },
      {
        id: 6,
        Titlee: "Project 6",
        imageUrl: require("../src/images/projectthree.png"),
        cardtext: "This is my project about.....",
        body: "Body 6",
      },
    ],
    Skill: [
      {
        id: 1,
        SkillName: "HTML",
        Skillicon: "fab fa-html5",
        Startotal: 5,
        Staractive: 5,
      },
      {
        id: 2,
        SkillName: "Css",
        Skillicon: "fab fa-css3-alt",
        Startotal: 5,
        Staractive: 5,
      },
      {
        id: 3,
        SkillName: "Java Script",
        Skillicon: "fab fa-js-square",
        Startotal: 5,
        Staractive: 3,
      },
      {
        id: 4,
        SkillName: "Bootstrap",
        Skillicon: "fab fa-bootstrap",
        Startotal: 5,
        Staractive: 3,
      },
      {
        id: 5,
        SkillName: "React Js",
        Skillicon: "fab fa-react",
        Startotal: 5,
        Staractive: 3,
      },
      {
        id: 6,
        SkillName: "MySql",
        Skillicon: "fas fa-database",
        Startotal: 5,
        Staractive: 3,
      },
      {
        id: 7,
        SkillName: "Python",
        Skillicon: "fab fa-python",
        Startotal: 5,
        Staractive: 5,
      },
      {
        id: 8,
        SkillName: "Python Flask",
        Skillicon: "fas fa-pepper-hot",
        Startotal: 5,
        Staractive: 3,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}



export const Consumer = Context.Consumer;
