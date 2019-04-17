import React from 'react';

import { formatTime } from '../../utils/timeUtil';

const TimeDisplay = props => <h3 className="time">{formatTime(props.time)}</h3>;

export default TimeDisplay;
