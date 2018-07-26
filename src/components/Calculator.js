import React, { Component } from 'react'
import Display from './Display'
import Buttons from './Buttons'

class Calculator extends Component {
	constructor(props) {
		super(props)

		this.handler = this.handler.bind(this)
		this.operations = this.operations.bind(this)
		this.symbolHandler = this.symbolHandler.bind(this)
		this.equals = this.equals.bind(this)

		this.state = {
			displayedNumber: 0,
			total: 0
		}
	}

	handler(e) {
		this.setState({
			displayedNumber:
				this.state.displayedNumber +
				e.target.attributes.getNamedItem('value').value
		})
	}

	symbolHandler(e) {
		this.setState({
			displayedNumber:
				this.state.displayedNumber +
				e.target.attributes.getNamedItem('operator').value
		})
	}

	operations() {
		this.setState({
			displayedNumber: ''
		})
	}

	equals() {
		this.setState({
			displayedNumber: 8
		})
	}

	render() {
		return (
			<div className="calculator">
				<Display displayedNumber={this.state.displayedNumber} />
				<Buttons
					value={this.state.displayedNumber}
					action={this.handler}
					operations={this.operations}
					symbolHandler={this.symbolHandler}
					equals={this.equals}
				/>
			</div>
		)
	}
}

export default Calculator
