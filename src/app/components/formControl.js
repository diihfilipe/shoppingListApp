import React from 'react';

import PropTypes from 'prop-types';

import { FormControl } from 'react-bootstrap';

const formControl = ({type, placeholder, onChangeFunction, ...props}) => {
  return(
    <FormControl
    type={type}
    placeholder={placeholder}
    onChange={onChangeFunction}
    />
  )
}

export default formControl;