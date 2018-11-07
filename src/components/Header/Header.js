// @flow

import * as React from 'react';

import './header.less';

type PropsType = {|

|};

type StateType = {|

|};

class Header extends React.Component<PropsType, StateType> {
    state = {

    };


    // ---------------------------------------------------- Render ----------------------------------------------------
    render(): React.Element<'div'> {
        return (
            <div className="header-container">
                This is Header
            </div>
        );
    }
}

export default Header;
