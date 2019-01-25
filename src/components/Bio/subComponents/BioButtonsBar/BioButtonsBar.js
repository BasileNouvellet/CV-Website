// @flow

import * as React from 'react';

import './BioButtonsBar.css';

type ButtonPropsType = {|
  text: string;
  onClick: () => void;
|};

const openNewTab = (link: string) => () => { window.open(link, '_blank'); };

function Button(props: ButtonPropsType) {
  const { text, onClick } = props;

  return (
    <div className="btn-call-to-action" onClick={onClick}>
      {text}
    </div>
  );
}

function BioButtonsBar() {
  return (
    <div id="BioButtonsBar">
      <Button
        text="Download CV"
        onClick={openNewTab('./assets/Resume_Basile_NOUVELLET.pdf')}
      />

      <Button
        text="Contact Me"
        onClick={openNewTab('mailto:basile.nouvellet@ponts.org')}
      />
    </div>
  );
}

export default BioButtonsBar;
