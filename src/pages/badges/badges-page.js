import React, {Component} from 'react';
import BadgesPageBlock from 'components/badges-page-block/badges-page-block';

class BadgesPage extends Component {
  render() {
    return (
      <div className='badges-page'>
        <div className='badges-page__wrapper'>
          <BadgesPageBlock title='За особые достижения'/>
          <BadgesPageBlock title='Неформальные значки'/>
        </div>
      </div>
    );
  }
}

export default BadgesPage;