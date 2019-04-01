import React, {Component} from 'react';
import PropTypes from 'prop-types';

class YtDropdownToggle extends Component {

    render() {
        const {toggleHandler, addrContent} = this.props;
        return (
            <button type="button" className="btn btn-outline-secondary dropdown-toggle col-md-3 text-truncate" data-toggle="dropdown" onClick={toggleHandler} title={addrContent}>
                {addrContent}
            </button>
        );
    }

}

YtDropdownToggle.propTypes = {
    toggleHandler: PropTypes.func,
    addrContent: PropTypes.string
};

export default YtDropdownToggle;
