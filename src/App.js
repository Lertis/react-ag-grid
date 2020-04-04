import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import 'ag-grid-enterprise';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columnDefs: [{
				headerName: "Make", field: "make", rowGroup: true
			}, {
				headerName: "Price", field: "price"
			}],
			autoGroupColumnDef: {
				headerName: "Model",
				field: "model",
				cellRenderer: 'agGroupCellRenderer',
				cellRendererParams: {
					checkbox: true
				}
			},
			rowData: [
				{ make: "Toyota", model: "Celica", price: 35000 },
				{ make: "Ford", model: "Mondeo", price: 32000 },
				{ make: "Porsche", model: "Boxter", price: 72000 }]
		}
	}

	render() {
		return (
			<div className="ag-theme-balham" style={{ height: '250px', width: '600px' }}>
				<AgGridReact
					columnDefs={this.state.columnDefs}
					groupSelectsChildren={true}
					autoGroupColumnDef={this.state.autoGroupColumnDef}
					rowData={this.state.rowData}>
				</AgGridReact>
			</div>
		);
	}
}
