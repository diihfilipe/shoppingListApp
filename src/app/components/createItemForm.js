import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import _ from 'underscore';

import options from '../helpers/options.json';

import { createItem } from '../actions';

import ItemForm from './formCreateItem';

class MainForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'Unidade(s)'
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleItemName = this.handleItemName.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
  }

  handleItemName(e) {
    this.setState({
      itemName: e.target.value
    })
  }

  handleQuantity(e) {
    this.setState({
      quantity: e.target.value
    })
  }

  handleSelect() {
    return _.map(options, (option, key) => {
      return <option value={option} key={key}>
        {option}
      </option>
    })
  }

  handleType(e) {
    this.setState({
      type: e.target.value
    })
  }

  handleSubmit() {
    let itens = this.props.itens;
    const newItens = {
      item: this.state.itemName,
      quantity: this.state.quantity,
      type: this.state.type
    }

    itens.push(newItens);

    this.props.createItem(itens);
  }

  render() {
    return (
      <div className="container-fluid">
        <ItemForm
          onSubmitFunction={
            (e) => {
              e.preventDefault()
              this.handleSubmit()
            }
          }
          onChangeName={
            this.handleItemName
          }
          onChangeQuantity={
            this.handleQuantity
          }
          handleType={
            this.handleType
          }
          handleSelect={
            this.handleSelect
          }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itens: state.itens
  }
}

export default connect(mapStateToProps, { createItem })(MainForm)