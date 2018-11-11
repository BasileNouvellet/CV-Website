// @flow

import * as React from 'react';

import './BioButtonsBar.css';

type ButtonPropsType = {|
  text: string;
  onClick: () => void;
|};

function Button(props: ButtonPropsType) {
  const { text, onClick } = props;

  return (
    <button
      className="btn-call-to-action"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function BioButtonsBar() {
  return (
    <div id="BioButtonsBar">
      <Button
        text="Download CV"
        onClick={() => null}
      />

      <Button
        text="Contact Me"
        onClick={() => null}
      />
    </div>
  );
}

export default BioButtonsBar;
