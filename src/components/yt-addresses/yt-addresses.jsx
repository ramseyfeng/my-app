import React from 'react';
import PropTypes from 'prop-types';

const YtAddresses = (props) => {
    let {chooseAddr, addrs} = props;
    let fakeUrl = '#'; //Adding this to avoid eslint warning
    return <div className="d-flex flex-wrap">
        {addrs.map(addr => {
            return (
                <div key={addr.code} onClick={() => void chooseAddr(addr)}>
                    <a className="btn btn-light btn-link m-2" href={fakeUrl}>{addr.name}</a>
                </div>
            );
        })}
    </div>;

};

YtAddresses.propTypes = {
    chooseAddr: PropTypes.func,
    addrs: PropTypes.arrayOf(PropTypes.object)
};

export default YtAddresses;
