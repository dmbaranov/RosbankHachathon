import React, {Component} from 'react';

class MainPageBlock extends Component {
  render() {
    return (
      <div className='main-page__block'>
        {this.props.children}
      </div>
    );
  }
}

export default MainPageBlock;