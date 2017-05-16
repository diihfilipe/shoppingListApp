import React, { Component } from 'react';

import { PageHeader } from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
      <div className="container-fluid">
        <PageHeader>
          Shopping list App.
        </PageHeader>
      </div>
    )
  }
}

export default Header;
