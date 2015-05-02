var React = require('../node_modules/react/addons');
var moment = require('../node_modules/moment');

var LogTime = React.createClass({

    render: function() {
        var { value, ...otherProps } = this.props;
        var time = moment(value);

        return (
            <span {...otherProps} title={time.format('ddd, D MMM [at] h:mm a')}>
                {time.fromNow()}
            </span>
        );
    }

});

module.exports = LogTime;
