import React, {Component} from 'react';

class MarketPageBlock extends Component {
  render() {
    return (
      <div className='market-page-block'>
        {this.props.children}
      </div>
    );
  }
}

export default MarketPageBlock;