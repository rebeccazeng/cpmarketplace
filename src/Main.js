import React from 'react';
import ReactDOM from 'react-dom';
import "./Main.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../node_modules/jquery/src/jquery.js"
import "../node_modules/popper.js/dist/popper.min.js"


class Navbar extends React.Component {

  render() {
    return (
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">CollegePrep.org</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
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
      <img className="circle avatar" src={this.props.img} />
      )
  }
}

/* Testimony */
class Testimony extends React.Component {
  render () {
    return (
      <div className="d-flex p-3 align-items-center">
        <div className="p-2">
          <Avatar img={this.props.img} />
          <p align="center"> {this.props.name}, {this.props.grade} </p>
        </div>
        <div className="p-2">
          <p> {this.props.content} </p>
        </div>
      </div>
      
      )
  } 
}


/* Dropdown options */
class DropdownPrev extends React.Component {
  render () {
    return (
  <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
    Subject
  </button>
  <div className="dropdown-menu">
    <a className="dropdown-item" href="#">ACT</a>
    <a className="dropdown-item" href="#">SAT</a>
  </div>
</div> )
  }
}

// TODO: continue exploring how to loop over all the options posted 
// so that we can use Dropdown generically

// class DropdownOption extends React.Component {
//   render() {
//     return <a href={this.props.link}>{this.props.text}</a>;
//   }
// }

/* More generalized dropdown option */
// class Dropdown extends React.Component {
//   renderDropdownOption(option, link) {
//     return <NavbarOption text={option} link={link} />;
//   }
//   renderDropdownTitle() {
//        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
//         Subject
//       </button>
//   }
//   render () {
//     return (
//       <div>
//       this.renderDropdownTitle();
//       var options = {this.props.options};
//       for (var i = 0; i < options.length; i++) {
//         this.renderDropdownOption(options[i]);
//       }
//       </div>
//       )
//   }
// }

/* Input box */
class InputBox extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="form-group">
          <label for="usr">{this.props.title}</label>
          <input type="text" className="form-control" id={this.props.id} />
        </div>
      </div> )
  }
}

class SelectionBox extends React.Component {
  render() {
    return (
        <div>
          <InputBox id="usr" title="Username" />
          <DropdownPrev />
        </div>
      )
  }
}



/* Building the main page */
class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container-fluid row">
        <div className="col-sm-5">
          <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="John" grade="10th grade" content="This is my comment."/>
          <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="John" grade="10th grade" content="This is my comment."/>
        </div>
        <div className="col-sm-5">
          <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="John" grade="10th grade" content="This is my comment."/>
          <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="John" grade="10th grade" content="This is my comment."/>
        </div>
        </div>
        <div className="col-sm-5">
         <SelectionBox />
        </div>
        </div>

    );
  }
}

export default Main;