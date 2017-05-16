import React, { Component } from 'react';

import Header from './header';
import ItemForm from './createItemForm';
import ListItens from './listItens';

class MainPage extends Component {
  render() {
    return(
      <div>
        <Header />
        <ItemForm />
        <ListItens
         />
      </div>
    )
  }
}

export default MainPage;