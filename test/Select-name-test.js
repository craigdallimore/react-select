'use strict';
/* global React, jsdom, TestUtils, expect, describe, it, beforeEach */

var Select = require('../src/Select');

describe('Select component with a name option', function() {
	jsdom();

	var props, instance;

	beforeEach(function() {

		props = {
			name: 'form-field-name',
			value: 'one',
			options: [
				{ value: 'one', label: 'One' },
				{ value: 'two', label: 'Two' }
			],
			onChange: sinon.spy()
		};

		instance = TestUtils.renderIntoDocument(<Select {...props}/>);

	});

	it('should assign the given name', function() {
		var selectInputElement = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'input')[0];
		expect(selectInputElement.getDOMNode().name).to.equal(props.name);
	});

});
