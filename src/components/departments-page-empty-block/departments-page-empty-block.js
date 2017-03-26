import React, {Component} from 'react';

class DepartmentsPageEmptyBlock extends Component {
  render() {
    return (
      <div className='dpeb'>
        {this.props.children}
      </div>
    );
  }
}

export default DepartmentsPageEmptyBlock;