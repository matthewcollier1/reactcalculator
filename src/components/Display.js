import React, { Component } from 'react'

class Display extends Component {
	render() {
		return (
			<div id="display">
				<p>{this.props.displayedNumber}</p>
			</div>
		)
	}
}

export default Display
