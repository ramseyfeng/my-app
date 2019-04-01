import React, {Component} from 'react';
import PropTypes from 'prop-types';

class YtTabs extends Component {

    getTabLinkClasses = (activeTab, idx) =>  {
        return 'nav-link dropdown-toggle' + (activeTab === idx ? ' active' : '');
    }

    render() {
        const {tabs, activeTab, clickTab} = this.props;
        let fakeUrl = '#'; //Adding this to avoid eslint warning
        return (
            <ul className="nav nav-tabs">
                {(tabs.map((tab, idx) => {
                    return (
                        <li onClick={() => {clickTab(idx);}} className="nav-item" key={tab.code} >
                            <a href={fakeUrl} className={this.getTabLinkClasses(activeTab, idx)}>{tab.name}</a>
                        </li>
                    );
                }))}
            </ul>
        );
    }
}

YtTabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    clickTab: PropTypes.func,
    activeTab: PropTypes.number
}

export default YtTabs;
