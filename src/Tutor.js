import React, { Component } from 'react';
import TutorBasicInfo from './TutorBasicInfo';
import MultiStep from '../node_modules/react-multistep/src/index';


class Tutor extends React.Component {
  render() {
  	const steps = [
              {name: 'StepOne', component: <TutorBasicInfo/>},
            ];
    return (
      <div>
      	<Multistep showNavigation={true} steps={steps}/>
      </div>
    )
  }
}

ReactDOM.render(<Tutor />, document.getElementById("index"))