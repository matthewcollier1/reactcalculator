import React, { Component } from 'react'

class Operators extends Component {
	render() {
		return (
			<div>
				<button
					id="equals"
					onClick={this.props.equals}
					operator={' = '}
				>
					=
				</button>
				<button
					id="add"
					onClick={this.props.symbolHandler}
					operator={' + '}
				>
					+
				</button>
				<button
					id="subtract"
					onClick={this.props.symbolHandler}
					operator={' - '}
				>
					-
				</button>
				<button
					id="multiply"
					onClick={this.props.symbolHandler}
					operator={' * '}
				>
					*
				</button>
				<button
					id="divide"
					onClick={this.props.symbolHandler}
					operator={' / '}
				>
					/
				</button>
				<button
					id="clear"
					onClick={this.props.operations}
					operator={'C'}
				>
					C
				</button>
			</div>
		)
	}
}

export default Operators
