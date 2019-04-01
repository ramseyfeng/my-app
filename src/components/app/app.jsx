import React, {Component} from 'react';
import YtDropdownMenuContainer from '../yt-dropdown-menu-container/yt-dropdown-menu-container';

class App extends Component {

    render() {
        return (
            <form>
                <div className="form-group flex-column">
                    <YtDropdownMenuContainer></YtDropdownMenuContainer>
                </div>
            </form>
        );
    }

}

export default App;
