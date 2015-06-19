'use strict';
/* global React, jsdom, TestUtils, expect, describe, it, beforeEach */

var Select = require('../src/Select');

describe('Select component - disabled', function() {
	jsdom();

	var props, instance;

	beforeEach(function() {

		props = {
			options: [
				{ value: 'one', label: 'One' },
				{ value: 'two', label: 'Two' }
			],
			disabled : true
		};

		instance = TestUtils.renderIntoDocument(<Select {...props}/>);

	});

	it('should have an \'is-disabled\' CSS class', function() {
		expect(instance.getDOMNode().className).to.contain('is-disabled');
	});

	it('will open if NOT disabled', function() {

		props = {
			options: [
				{ value: 'one', label: 'One' },
				{ value: 'two', label: 'Two' }
			]
		};

		instance = TestUtils.renderIntoDocument(<Select {...props}/>);
		let selectControl = TestUtils.findRenderedDOMComponentWithClass(instance, 'Select-control');

		// Simulate a left/main mousedown event
		let event = { button :0, type: 'mousedown' };
		Simulate.mouseDown(selectControl.getDOMNode(), event);

		expect(instance.getDOMNode().className).to.contain('is-open');

	});

});
