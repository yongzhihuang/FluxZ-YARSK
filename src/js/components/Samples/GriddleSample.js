import React from 'react';
import Griddle from 'griddle-react';

var fakeData =  [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
  {
    "id": 1,
    "name": "Koch Becker",
    "city": "Johnsonburg",
    "state": "New Jersey",
    "country": "Madagascar",
    "company": "Eventage",
    "favoriteNumber": 2
  },
  {
    "id": 2,
    "name": "Lowery Hopkins",
    "city": "Blanco",
    "state": "Arizona",
    "country": "Ukraine",
    "company": "Comtext",
    "favoriteNumber": 3
  },
  {
    "id": 3,
    "name": "Walters Mays",
    "city": "Glendale",
    "state": "Illinois",
    "country": "New Zealand",
    "company": "Corporana",
    "favoriteNumber": 6
  },
  {
    "id": 4,
    "name": "Shaw Lowe",
    "city": "Coultervillle",
    "state": "Wyoming",
    "country": "Ecuador",
    "company": "Isologica",
    "favoriteNumber": 2
  }
];

export default class GriddleSample extends React.Component {
	render() {
		return (
			<div>
				<h2>Griddle Component</h2>
				<p>This is a neat little component called Griddle used to display data in a grid: </p>
                        <div className="well well-sm">/components/Samples/GriddleSample.js</div>
				<Griddle results={fakeData} tableClassName="table" showFilter={true} showSettings={true} columns={["id","name", "city", "state", "country", "company", "favoriteNumber"]} />
			</div>
		);	
	}
}
