import React, {Component} from 'react';
import rb from 'static/img/rb.png';

class HorizontalMenu extends Component {
  render() {
    return (
      <div className='horizontal-menu'>
        <div className='horizontal-menu__wrapper'>
          <div className='horizontal-menu__container _left'>
            <div className='horizontal-menu__logo'>
              <img src={rb} height='20px' width='150px'/>
            </div>
          </div>
          <div className='horizontal-menu__container _right'>
            <div className='horizontal-menu__name'>Добро пожаловать, Иван</div>
            <div className='horizontal-menu__exit'>Выход</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalMenu;