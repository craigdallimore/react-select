'use strict';


// These global test libraries will be useful for many tests, so we can avoid
// some boiler plate by delaring them here.
global.jsdom = require('mocha-jsdom');
global.chai = require('chai');
global.sinon = require('sinon');
global.expect = global.chai.expect;
global.React = require('react/addons');
global.TestUtils = global.React.addons.TestUtils;

var sinonChai = require('sinon-chai');

global.chai.should();
global.chai.use(sinonChai);

require('./'); // Run the tests.
