// @flow

import * as React from 'react';

import './SectionItem.css';

export type SectionItemType = {|
  title: string,
  date: string,
  company: string,
  logo: string,
  place: string,
  text: string,
|};

type PropsType = {|
  item: SectionItemType,
  position: 'left' | 'right',
  mainColor: string,
  secondColor: string,
|};

// TODO: arrow depending on position
// TODO: display logo in Header if screen shrinks

function SectionItem(props: PropsType) {
  const { item, mainColor, secondColor } = props;

  const headerStyle = { backgroundColor: mainColor };
  const dateStyle = { color: secondColor };
  const companyStyle = { color: mainColor };

  return (
    <div id="SectionItem">
      <div className="header" style={headerStyle}>
        <div className="title">{item.title}</div>
        <div className="date" style={dateStyle}>{item.date}</div>
      </div>

      <div className="body">
        <div className="sub-header">
          <div className="company" style={companyStyle}>{item.company}</div>
          <div className="place">{item.place}</div>
        </div>

        <div className="text">{item.text}</div>
      </div>
    </div>
  );
}

export default SectionItem;
