import React, {Component} from 'react';
import BadgeComponent from 'components/badge/badge';

class BadgesPageBlock extends Component {
  render() {
    return (
      <div className='badges-page-block'>
        <div className='badges-page-block__title'>{this.props.title}</div>
        <div className='badges-page-block__content'>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
          <BadgeComponent/>
        </div>
      </div>
    );
  }
}

export default BadgesPageBlock;