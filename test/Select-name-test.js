'use strict';
/* global React, jsdom, TestUtils, expect, describe, it, beforeEach */

var Select = require('../src/Select');

describe('Select test', function() {
	jsdom();

	var options, instance;

	function logChange(val) {
		console.log('Selected: ' + val);
	}

	beforeEach(function() {

		options = [
			{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' }
		];

		// Render an instance of the component
		instance = TestUtils.renderIntoDocument(
			<Select
				name="form-field-name"
				value="one"
				options={options}
				onChange={logChange}/>
		);

	});

	it('should assign the given name', function() {
		var selectInputElement = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input')[0];
		expect(selectInputElement.getDOMNode().name).to.equal('form-field-name');
	});

});
