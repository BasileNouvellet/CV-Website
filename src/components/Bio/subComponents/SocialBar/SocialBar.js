// @flow

import * as React from 'react';

import './SocialBar.css';
import linkedInLogo from './assets/linkedin.svg';
import mailLogo from './assets/mail.svg';
import githubLogo from './assets/github.svg';

type ButtonPropsType = {|
  name: string,
  icon: any,
  linkToOpenOnClick: string,
|};

function SocialBarButton(props: ButtonPropsType) {
  const { name, icon, linkToOpenOnClick } = props;

  return (
    <a
      className="btn-social"
      target="_blank"
      rel="noopener noreferrer"
      href={linkToOpenOnClick}
    >
      <img className="btn-social-img" src={icon} alt={`${name}`} />
    </a>
  );
}

function SocialBar() {
  return (
    <div id="SocialBar">
      <SocialBarButton
        name="Linked In"
        icon={linkedInLogo}
        linkToOpenOnClick="https://www.linkedin.com/in/basile-nouvellet/"
      />

      <SocialBarButton
        name="Github"
        icon={githubLogo}
        linkToOpenOnClick="https://github.com/BasileNouvellet"
      />

      <SocialBarButton
        name="Mail"
        icon={mailLogo}
        linkToOpenOnClick="mailto:basile.nouvellet@ponts.org"
      />
    </div>
  );
}

export default SocialBar;
