var React = require('../node_modules/react/addons');
var moment = require('../node_modules/moment');

var LogTime = React.createClass({

    getInitialState: function() {
        return {
            value: this.props.value
        };
    },

    render: function() {
        var { value, ...otherProps } = this.props;
        var time = moment(this.state.value);

        return (
            // set all props other than `value` as attributes on the DOM node
            <span {...otherProps} title={time.format('ddd, D MMM [at] h:mm a')}>
                {time.fromNow()}
            </span>
        );
    },

    getTimeoutDelay: function() {
        var timeDiff = (new Date) - this.state.value;
        var threshold = {
            second: 1000,
            minute: 60 * 1000,
            hour: 60 * 60 * 1000,
            day: 24 * 60 * 60 * 1000,
            month: 30 * 24 * 60 * 60 * 1000
        };
        if (timeDiff < threshold.minute) {
            return threshold.second;
        } else if (timeDiff < threshold.hour) {
            return threshold.minute;
        } else if (timeDiff < threshold.day) {
            return threshold.hour;
        } else if (timeDiff < threshold.month) {
            return threshold.day;
        } else {
            // ignore if time difference is more than a month
            // asssuming nobody will keep a tab intact for months
            return null;
        }
    },

    setTimeout: function() {
        var timeoutDelay = this.getTimeoutDelay();
        if (timeoutDelay) {
            console.log('Will check after', timeoutDelay, 'ms');
            this.timeoutId = setTimeout(function() {
                this.setState(this.getInitialState());
            }.bind(this), timeoutDelay);
        }
    },

    componentDidMount: function() {
        this.setTimeout();
    },

    componentDidUpdate: function() {
        this.setTimeout();
    }

});

module.exports = LogTime;
