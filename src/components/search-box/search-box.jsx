import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class SearchBox extends Component {

    render() {
        return (
            <div className="input-group col-lg-6">
                <input onChange={this.props.onChange}
                    className="form-control py-2 border-right-0 border" type="search" id="example-search-input"/>
                <span className="input-group-append">
                    <div className="input-group-text bg-transparent"><FontAwesomeIcon icon={faSearch} /></div>
                </span>
            </div>
        );
    }

}

SearchBox.propTypes = {
    onChange: PropTypes.func
};

export default SearchBox;
