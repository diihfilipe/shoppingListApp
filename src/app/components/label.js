import React from 'react';

import PropTypes from 'prop-types';

import { ControlLabel } from 'react-bootstrap';

const Label = ({labelText, ...props}) => {
  return(
    <ControlLabel>{labelText}</ControlLabel>
  )
}

export default Label;