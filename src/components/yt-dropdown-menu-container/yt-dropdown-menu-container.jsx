import React, {Component} from 'react';
import YtTabs from '../yt-tabs/yt-tabs';
import YtAddresses from '../yt-addresses/yt-addresses';
import SearchBox from '../search-box/search-box';
import YtDropdownToggle from '../yt-dropdown-toggle/yt-dropdown-toggle';

class YtDropdownMenuContainer extends Component {

    fullAddressesObj;
    addressesBackup;    //For search backup usage
    initialEmptyTab = {name: '请选择', code: 0};

    state = {
        addresses: [],
        activeTab: 0,
        tabs: [this.initialEmptyTab],
        addrContent: '选择您的地址',
        isOpen: false
    };

    componentWillMount

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/modood/Administrative-divisions-of-China/master/dist/pcas-code.json')
            .then(function (response) {
                return response.json();
            }).then((resAddrs) => {
                this.fullAddressesObj = resAddrs;
                let addresses = this.findAddresses([], resAddrs);
                this.addressesBackup = addresses;
                this.setState({addresses});
            });
    }

    findAddresses = (paths, addrs) => {
        let res = addrs;
        paths.forEach(path => {
            res = res.find(r => r.name === path).children;
        });
        return res;
    };

    filterAddresses = (e) => {
        let {value} = e.target;
        let addresses = this.addressesBackup;
        if (value) {
            addresses = addresses.filter(addr => addr.name.includes(value));
        }
        this.setState({addresses});
    };

    clickTab = (activeTab) => {
        let {tabs} = this.state;
        let paths = [];
        for (let i = 0; i < activeTab; i++) {
            paths.push(tabs[i].name);
        }
        let addresses = this.findAddresses(paths, this.fullAddressesObj);
        this.addressesBackup = addresses;
        this.setState({activeTab, addresses});
    };

    chooseAddr = (addr) => {
        let {tabs, activeTab} = this.state;
        let oriTabName = tabs[activeTab].name;
        let {name, code} = addr;
        tabs[activeTab] = {name, code};

        if (oriTabName && oriTabName !== name) {
            tabs = tabs.slice(0, activeTab + 1);
            this.setState({tabs});
        }

        let paths = [];
        for (let i = 0; i <= activeTab; i++) {
            paths.push(tabs[i].name);
        }
        if (tabs.length === activeTab + 1 &&
            this.hasAdditionalTab(tabs)) {
            let addresses = this.findAddresses(paths, this.fullAddressesObj);
            tabs.push(this.initialEmptyTab);
            activeTab = tabs.length - 1;
            this.addressesBackup = addresses;
            this.setState({addresses, activeTab});
        } else {
            this.setState({
                isOpen: false,
                addrContent: tabs.map(tab => tab.name).join('/')
            });
        }

        this.setState({tabs});
    };

    hasAdditionalTab = (tabs) => {
        let addrObj = this.fullAddressesObj;
        if (tabs.length === 0) {
            return true;
        }
        tabs.forEach(function (tab) {
            let found = addrObj.find((addr) => addr.name === tab.name);
            addrObj = found.children;
        });
        return !!addrObj;
    };

    toggleHandler = () => {
        let {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    render() {
        const {addrContent, isOpen, tabs, activeTab, addresses} = this.state;
        return (
            <div className="d-flex flex-column dropdown">
                <YtDropdownToggle toggleHandler={this.toggleHandler} addrContent={addrContent}/>
                <div className={(isOpen ? 'show': '') + ' dropdown-menu col-md-7'}>
                    <YtTabs clickTab={this.clickTab} tabs={tabs} hasAdditionalTab={this.hasAdditionalTab} activeTab={activeTab}/>
                    <div className="tab-content m-3">
                        <SearchBox onChange={this.filterAddresses}/>
                        <YtAddresses addrs={addresses} chooseAddr={this.chooseAddr}/>
                    </div>
                </div>
            </div>
        );
    }

}

export default YtDropdownMenuContainer;

