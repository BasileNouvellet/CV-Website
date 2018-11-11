// @flow

import * as React from 'react';

import './SocialBar.css';

type ButtonPropsType = {|
  name: string,
|};

function SocialBarButton(props: ButtonPropsType) {
  const { name } = props;

  return (
    <button className="btn-social" type="button">
      {/* <img src="" alt=""/> */}
      {name}
    </button>
  );
}

function SocialBar() {
  return (
    <div id="SocialBar">
      <SocialBarButton name="LI" />
      <SocialBarButton name="Git" />
      <SocialBarButton name="Mail" />
    </div>
  );
}

export default SocialBar;
