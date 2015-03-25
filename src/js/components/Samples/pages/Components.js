import React from 'react';
import SampleES6 from '../SampleES6';
import GriddleSample from '../GriddleSample';
import SampleNotification from '../SampleNotification';

export default class Components extends React.Component {
	render() {
		return (
			<div className="col-lg-12 col-xs-12 col-md-12">
				<SampleES6 />
				<hr />

				<GriddleSample />
				<hr />

				<SampleNotification />
				<hr />
			</div>
		);	
	}
}
