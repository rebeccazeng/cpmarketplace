import React, { Component } from 'react';
import TutorBasicInfo from './TutorBasicInfo';
import StepZilla from '../node_modules/react-stepzilla/src/main';


export default class Tutor extends Component {
	render () {
		const steps =
		    [
		      {name: 'Tutor Basic Info', component: <TutorBasicInfo />},
		    ]
		return (
			<div className='step-progress'>
			    <StepZilla steps={steps}/>
			</div>
		)
	}
}