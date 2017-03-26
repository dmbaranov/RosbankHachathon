import React, {Component} from 'react';

class BadgesPageBlock extends Component {
  render() {
    return (
      <div className='badges-page-block'>
        {this.props.children}
      </div>
    );
  }
}

export default BadgesPageBlock;