import React from 'react';

import PropTypes from 'prop-types';

import _ from 'underscore';

const ListItens = (props) => {
  console.log(props)
  console.log(...props)
  return(
    <div>
      { _.map(...props, (itens) => {
        console.log(itens)
        console.log(...itens)
      }) }
    </div>
  )
}

const { array } = PropTypes

ListItens.propTypes = {
  props: array.isRequired
}

export default ListItens;