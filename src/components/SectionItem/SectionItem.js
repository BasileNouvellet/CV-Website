// @flow

import * as React from 'react';

import './SectionItem.css';

import type { ColorsObjectType } from '../SectionTimeline';

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
  colors: ColorsObjectType,
|};

// TODO: display logo in Header if screen shrinks

function renderSectionItemHeader(item, style) {
  return (
    <div className="header" style={style.header}>
      <div className="arrow-container" style={style.arrowContainer}>
        <div className="arrow" style={style.arrow} />
      </div>

      <div className="title">{item.title}</div>
      <div className="date" style={style.date}>{item.date}</div>
    </div>
  );
}

function renderSectionItemBody(item, style) {
  return (
    <div className="body">
      <div className="sub-header">
        <div className="company" style={style.company}>{item.company}</div>
        <div className="place">{item.place}</div>
      </div>

      <div className="text">{item.text}</div>
    </div>
  );
}

function SectionItem(props: PropsType) {
  const { item, colors, position } = props;

  const style = {
    header: {
      backgroundColor: colors.main,
    },
    date: {
      color: colors.second,
    },
    company: {
      color: colors.main,
    },
    arrowContainer: {
      [`${position === 'left' ? 'right' : 'left'}`]: '-0.6em',
    },
    arrow: {
      backgroundColor: colors.main,
    },
  };

  return (
    <div id="SectionItem">
      {renderSectionItemHeader(item, style)}
      {renderSectionItemBody(item, style)}
    </div>
  );
}

export default SectionItem;
