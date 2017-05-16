import React from 'react';

import PropTypes from 'prop-types';

import { Form, FormGroup } from 'react-bootstrap';

import Label from './label';
import Button from './button';
import FormControl from './formControl';
import FormControlSelect from './formControlSelect';

const ItemForm = ({onSubmitFunction, onChangeName, onChangeQuantity, handleSelect, handleType, ...props}) => {
  return (
    <Form inline
          onSubmit={
            onSubmitFunction
          }>
          <FormGroup>
            <Label labelText={'Nome'} />
            {' '}
            <FormControl
              type='text'
              placeholder='Digite o nome do item...'
              onChangeFunction={
                onChangeName
              } />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label labelText='Quantidade' />
            {' '}
            <FormControl
              type='number'
              placeholder='0'
              onChangeFunction={
                onChangeQuantity
              } />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label labelText='Tipo' />
            {' '}
            <FormControlSelect
              componentClass='select'
              placeholder='Selecione...'
              onHandleSelect={handleSelect}
              onChangeFunction={
                handleType
              } />
          </FormGroup>
          {' '}
          <Button
          type='submit'
          bsStyle='primary'
          text='Cadastrar item'
          />
        </Form>
  )
}

export default ItemForm;