// @flow

import * as React from 'react';

import SectionItem, { SectionItemType } from '../SectionItem';

import './SectionTimeline.css';

type PropsType = {|
  title: string,
  mainColor: string,
  secondColor: string,
  items: Array<SectionItemType>,
|};

// TODO: display logo only if display not shrunk

function renderSectionTimeline(
  items: Array<SectionItemType>,
  mainColor: string,
  secondColor: string,
) {
  return items.map((item: SectionItemType, index: number) => {
    const position = index % 2 === 0 ? 'left' : 'right';
    const lineClass = `line ${position}`;
    const middleLineStyle = { backgroundColor: secondColor };

    return (
      <div className={lineClass}>
        <SectionItem
          item={item}
          mainColor={mainColor}
          secondColor={secondColor}
          position={position}
        />

        <img
          src={item.logo}
          alt={`${item.company.toLowerCase()} logo`}
          className="logo"
        />

        <div className="middle-line" style={middleLineStyle} />
      </div>
    );
  });
}

function SectionTimeline(props: PropsType) {
  const {
    title, mainColor, secondColor, items,
  } = props;

  const titleStyle = { color: mainColor };

  return (
    <div id="SectionTimeline" style={titleStyle}>
      <div className="title">{title}</div>

      {renderSectionTimeline(items, mainColor, secondColor)}
    </div>
  );
}

export default SectionTimeline;
