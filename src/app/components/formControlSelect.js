import React from 'react';

import PropTypes from 'prop-types';

import { FormControl } from 'react-bootstrap';

const formControlSelect = ({componentClass, placeholder, onChangeFunction, onHandleSelect, ...props}) => {
  return(
    <FormControl
    componentClass={componentClass}
    placeholder={placeholder}
    onChange={onChangeFunction}>
    {onHandleSelect()}
    </FormControl>
  )
}

export default formControlSelect;