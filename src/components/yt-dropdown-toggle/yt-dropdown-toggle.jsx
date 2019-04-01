import React, {Component} from 'react';
import PropTypes from 'prop-types';

class YtDropdownToggle extends Component {

    render() {
        const {toggleHandler, addrContent} = this.props;
        return (
            <div type="button" className="btn btn-light dropdown-toggle col-md-4" data-toggle="dropdown" onClick={toggleHandler}>
                {addrContent}
            </div>
        );
    }

}

YtDropdownToggle.propTypes = {
    toggleHandler: PropTypes.func,
    addrContent: PropTypes.string
};

export default YtDropdownToggle;
