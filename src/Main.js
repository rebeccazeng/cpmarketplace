import React from 'react';
import ReactDOM from 'react-dom';
import "./Main.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/jquery/src/jquery.js"
import "../node_modules/popper.js/dist/popper.min.js"


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
   <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">CollegePrep.org</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
</nav>
    );
  }
}

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
      <div className="col">
        <div className="col1">
          <Avatar img={this.props.img} />
          <PersonInfo name={this.props.name} grade={this.props.grade} />
        </div>
        <div className="col2">
          <Textbox text={this.props.content} />
        </div>
      </div>
      
      )
  } 
}


/* Dropdown options */
class Dropdown extends React.Component {
  render () {
    return (
  <div class="dropdown">
  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Subject
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">ACT</a>
    <a class="dropdown-item" href="#">SAT</a>
  </div>
</div> )
  }
}

/* Input box */
class InputBox extends React.Component {
  render () {
    return (
      <div class="col">
        <div class="form-group">
          <label for="usr">CP Email:</label>
          <input type="text" class="form-control" id="usr" />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" />
        </div>
      </div> )
  }
}


/* Building the main page */
class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="John" grade="10th" content="This is my comment."/>
        <div className="col">
          <InputBox />
          <Dropdown />  
        </div>

      </div>
    );
  }
}

export default Main;