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

/* Testimony */
class Testimony extends React.Component {
  render () {
    return (
      <div className="d-flex p-3 align-items-center">
        <div className="p-2">
          <img className="circle avatar" src={this.props.img} />
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

 class Dropdown extends React.Component {
  // @source: http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx
  // @source: https://reactjs.org/docs/lists-and-keys.html
  // TODO: take a look at changing the dropdown to reflect chosen item
  // https://github.com/chrisharrington/demos/blob/gh-pages/react-controls/dropdown.html
  renderDropdownOption(option) {
    return ( 
      <a className="dropdown-item" href="#">{option}</a>
    )
  }
  render() {
    return(
      <div className="dropdown">
        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
          Subject
        </button>
        <div className="dropdown-menu">
          {this.props.options.map((option) => (
              <a className="dropdown-item">{option}</a>
            ))}
        </div>
      </div>
    ) 
  }
 }

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
          <Dropdown options={this.props.options} />
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
        <div className="col-centered">
          <div>
          <h4>CollegePrep is here to help you with all you need to improve your score. </h4>
          <p>Find a tutor</p> <InputBox />
          </div>
        </div>
        <div className="col-centered">
          <div className="container-fluid row col-sm-8 col-centered">
          <h4> Why choose CollegePrep? </h4>
          <p> CollegePrep is a free online platform for learning ACT/SAT concepts and studying for the standardized exams. Through the one-on-one platform, students are able to schedule appointments and learn subjects at their own pace, while tutors are able to provide quality help to students.</p>
          </div>
        </div>
        <div className="container-fluid row col-centered">
          <div className="col-sm-5">
            <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="Abigail" grade="9th grade" content="CollegePrep is easily the best place that I know for learning ACT and SAT. I would really like to thank all of you guys for making this possible!"/>
            <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="Bob" grade="10th grade" content="Thanks for creating this platform! I was able to get the help that I needed to improve my score, for free! The test would have been so much more difficult without this help."/>
          </div>
          <div className="col-sm-5">
            <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="Cathy" grade="11th grade" content="I really enjoyed using this platform to get a tutor. At the time, I did not know which tutoring company to use, but I am glad CollegePrep was easy to use, and the tutors were really friendly."/>
            <Testimony img="https://4.bp.blogspot.com/-h9fOaNMJsms/ToQ6XY_5__I/AAAAAAAAAf8/-DWR5VhIkC0/s1600/1178525479930832-cho-con-1-788229.jpg" name="Dwight" grade="12th grade" content="Before using CollegePrep, I did not really know where I could get quality help for a lower price. A lot of the companies online charge a lot and my family could not afford to pay. When using the help that CollegePrep offered, I was shocked at the quality and the price."/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;