import React, { Component } from 'react'
import Operators from './Operators'

class Buttons extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<button id="zero" onClick={this.props.action} value={0}>
					0
				</button>
				<button id="one" onClick={this.props.action} value={1}>
					1
				</button>
				<button id="two" onClick={this.props.action} value={2}>
					2
				</button>
				<button id="three" onClick={this.props.action} value={3}>
					3
				</button>
				<button id="four" onClick={this.props.action} value={4}>
					4
				</button>
				<button id="five" onClick={this.props.action} value={5}>
					5
				</button>
				<button id="six" onClick={this.props.action} value={6}>
					6
				</button>
				<button id="seven" onClick={this.props.action} value={7}>
					7
				</button>
				<button id="eight" onClick={this.props.action} value={8}>
					8
				</button>
				<button id="nine" onClick={this.props.action} value={9}>
					9
				</button>
				<button id="decimal" onClick={this.props.action} value={'.'}>
					.
				</button>
				<Operators
					operations={this.props.operations}
					symbolHandler={this.props.symbolHandler}
					equals={this.props.equals}
				/>
			</div>
		)
	}
}

export default Buttons
