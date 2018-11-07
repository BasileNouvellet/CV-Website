// @flow

import * as React from 'react';

import './bio.less';

type PropsType = {|

|};

type StateType = {|

|};

class Bio extends React.Component<PropsType, StateType> {

    state = {

    };

    // ---------------------------------------------------- Render ----------------------------------------------------
    render(): Element<'div'> {
        return (
            <div className="bio-container">
                This is Bio
            </div>
        );
    }
}

export default Bio;
