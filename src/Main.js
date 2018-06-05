import React from 'react';
import ReactDOM from 'react-dom';
import "./Main.css"

class NavbarOption extends React.Component {
  render() {
    return <a href={this.props.link}>{this.props.text}</a>;
  }
}

class Navbar extends React.Component {
  renderNavbarOption(option, link) {
    return <NavbarOption text={option} link={link} />;
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-option" id="bold-item">
          {this.renderNavbarOption("CollegePrep.org", "https://collegeprep.org")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("Find a Tutor", "https://collegeprep.org/#findatutor")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("Become a Tutor", "https://collegeprep.org/#becomeatutor")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("Pricing", "https://collegeprep.org/#pricing")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("About", "https://collegeprep.org/#about")}
        </div>

        <div className="navbar-option navbar-right">
          {this.renderNavbarOption("Sign Up", "https://collegeprep.org/#signup")}
        </div>
        <div className="navbar-option navbar-right">
          {this.renderNavbarOption("Log In", "https://collegeprep.org/#login")}
        </div>
      </div>
    );
  }
}
/*
class SelectionBox extends React.Component {
  render() {
    return (
    <div className="selectionBox">
       <div id="bold-item"> {this.props.heading} </div>
        <div>{this.props.p}</div>
        <br />
        <div className="testimony">
          <div className="circle"></div>
          <div>{this.props.testimonyText}</div>
          <br />
          <div>{this.props.testimonyPerson}</div>
        </div>
        
    </div>
      )
  }
}
*/

// separation of selection box --> avatar, person's name, testimony

/* Avatar */
class Avatar extends React.Component {
  render () {
    return (
      <div className="circle"><img className="avatar" src={this.props.img} /></div>
      )
  }
}

/* Person's name */
class PersonInfo extends React.Component {
  render () {
    return (
      <div className="bold-item">-{this.props.name}, {this.props.grade}</div>
      )
  }
}

/* Text */
class Textbox extends React.Component {
  render () {
    return (
      <div>{this.props.text}</div>
      )
  }
}

/* Testimony */
class Testimony extends React.Component {
  render () {
    return (
      <div className="col-2">
        <div id="col1">
          <Avatar img={this.props.img} />
          <PersonInfo name={this.props.name} grade={this.props.grade} />
        </div>
        <div id="col2">
          <Textbox text="hey this is great!" />
        </div>
      </div>
      
      )
  } 
}


/* Building the main page */
class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="john" grade="10th" />
      </div>
    );
  }
}

export default Main;