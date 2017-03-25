import React, {Component} from 'react';
import badge from 'static/img/badge.png';

class Badge extends Component {
  render() {
    return (
      <div className='badge'>
        <div className='badge__image'>
          <img src={badge}/>
        </div>
        <div className='badge__reason'>За выполнение достижения</div>
      </div>
    );
  }
}

export default Badge;