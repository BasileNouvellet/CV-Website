// @flow

import * as React from 'react';

import SectionItem, { SectionItemType } from '../SectionItem';

import './SectionTimeline.css';

export type ColorsObjectType = {|
  main: string,
  second: string,
|};

type PropsType = {|
  title: string,
  colors: ColorsObjectType,
  items: Array<SectionItemType>,
|};

// TODO: display logo only if display not shrunk

function renderSectionItem(colors: ColorsObjectType) {
  return (item: SectionItemType, index: number) => {
    const position = index % 2 === 0 ? 'left' : 'right';
    const lineClass = `line ${position}`;
    const middleLineStyle = { backgroundColor: colors.second };

    return (
      <div className={lineClass} key={item.title + item.date}>
        <SectionItem
          item={item}
          colors={colors}
          position={position}
        />

        <img
          className="logo"
          src={item.logo}
          alt={`${item.company} logo`}
        />

        <div className="middle-line-container">
          <div className="middle-line" style={middleLineStyle} />
        </div>
      </div>
    );
  };
}

function SectionTimeline(props: PropsType) {
  const { title, colors, items } = props;

  const titleStyle = { color: colors.main };

  return (
    <div id="SectionTimeline" style={titleStyle}>
      <div className="section-timeline-title">{title}</div>

      {items.map(renderSectionItem(colors))}
    </div>
  );
}

export default SectionTimeline;
