/*global jest, describe, it, expect, beforeEach*/

jest.dontMock('../src/LogTime.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var LogTime = require('../src/LogTime');

describe('LogTime', function() {

    it('renders seconds ago time correctly', function() {
        var time = new Date();

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('a few seconds ago');
    });

    it('renders minutes ago time correctly', function() {
        var time = new Date();
        time.setMinutes(time.getMinutes() - 8);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('8 minutes ago');
    });

    it('renders minutes ago time correctly', function() {
        var time = new Date();
        time.setMinutes(time.getMinutes() - 8);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('8 minutes ago');
    });

    it('renders 1 minute ago time correctly', function() {
        var time = new Date();
        time.setMinutes(time.getMinutes() - 1);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('a minute ago');
    });

    it('renders hours ago time correctly', function() {
        var time = new Date();
        time.setHours(time.getHours() - 5);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('5 hours ago');
    });

    it('renders 1 hour ago time correctly', function() {
        var time = new Date();
        time.setHours(time.getHours() - 1);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('an hour ago');
    });

    it('renders days ago time correctly', function() {
        var time = new Date();
        time.setDate(time.getDate() - 5);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('5 days ago');
    });

    it('renders 1 day ago time correctly', function() {
        var time = new Date();
        time.setDate(time.getDate() - 1);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('a day ago');
    });

    it('renders months ago time correctly', function() {
        var time = new Date();
        time.setMonth(time.getMonth() - 3);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('3 months ago');
    });

    it('renders 1 month ago time correctly', function() {
        var time = new Date();
        time.setMonth(time.getMonth() - 1);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('a month ago');
    });

    it('renders years ago time correctly', function() {
        var time = new Date();
        time.setFullYear(time.getFullYear() - 2);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('2 years ago');
    });

    it('renders 1 year ago time correctly', function() {
        var time = new Date();
        time.setFullYear(time.getFullYear() - 1);

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().textContent).toEqual('a year ago');
    });

    it('has tooltip with full date and time', function() {
        var time = new Date('1990-09-24T05:30:00+0530');

        var logTime = TestUtils.renderIntoDocument(
            <LogTime value={time} />
        );

        expect(logTime.getDOMNode().title).toEqual('Mon, 24 Sep at 5:30 am');
    });

});
