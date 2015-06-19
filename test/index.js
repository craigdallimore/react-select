'use strict';


// These global test libraries will be useful for many tests, so we can avoid
// some boiler plate by delaring them here.
global.jsdom = require('mocha-jsdom');

var chai = global.chai = require('chai');
global.expect = chai.expect;
global.sinon = require('sinon');

var sinonChai = require('sinon-chai');
global.chai.should();
global.chai.use(sinonChai);

var React = global.React = require('react/addons');
var TestUtils = global.TestUtils = React.addons.TestUtils;
global.Simulate = TestUtils.Simulate;


require('./'); // Run the tests.
