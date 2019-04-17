import React from 'react';

import {Airport, BoardingPass, Ground} from '../components';

export const renderItems = items => items.map(item => {
  const { type, segment_id } = item;

  switch (type) {
    case 'GROUND': {
      return <Ground {...item} key={segment_id} className="segment-active no-top-padding" />;
    }
    
    case 'AIRPORT': {
      return <Airport {...item} key={segment_id} />;
    }

    default:
      return <BoardingPass {...item} key={segment_id} />
  }
});
