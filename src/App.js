import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"

class NavbarOption extends React.Component {
  render() {
    return <a>{this.props.value}</a>;
  }
}

class Navbar extends React.Component {
  renderNavbarOption(option) {
    return <NavbarOption value={option} />;
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-option" id="bold-item">
          {this.renderNavbarOption("CollegePrep.org")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("Find a Tutor")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("Become a Tutor")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("Pricing")}
        </div>
        <div className="navbar-option">
          {this.renderNavbarOption("About")}
        </div>

        <div className="navbar-option" id="navbar-right">
          {this.renderNavbarOption("Sign Up")}
        </div>
        <div className="navbar-option" id="navbar-right">
          {this.renderNavbarOption("Log In")}
        </div>
      </div>
    );
  }
}

class SelectionBox extends React.Component {
  render() {
    return (
      <div className="selectionBox">
       <div> CollegePrep is here to help you with all you need to improve your score. </div>
        
      </div>
      )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SelectionBox />
      </div>
    );
  }
}

export default App;