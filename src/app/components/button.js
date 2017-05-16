import React, { PropTypes } from 'react';

import { Button } from 'react-bootstrap';

const ButtonGeneric = ({type, bsStyle, text, ...props}) => {
  return (
    <Button
      type={type}
      bsStyle={bsStyle}
    >{text}</Button>
  )
}

export default ButtonGeneric;