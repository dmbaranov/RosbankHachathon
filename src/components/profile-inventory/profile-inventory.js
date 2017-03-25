import React, {Component} from 'react';
import purse from 'static/img/purse.jpg';
import badge from 'static/img/badge.png';

class ProfileInventory extends Component {
  render() {
    return (
      <div className='profile-inventory'>
        <div className='profile-inventory__block'>
          <div className='profile-inventory__block-title'>Мои баллы</div>
          <div className='profile-inventory__block-content'>
            <img className='profile-inventory__block-coins-image' src={purse}/>
            <div className='profile-inventory__block-coins-amount'>123</div>
          </div>
        </div>
        <div className='profile-inventory__block _badges'>
          <div className='profile-inventory__block-title'>Мои значки</div>
          <div className='profile-inventory__block-content'>
            <div className='profile-inventory__block-badges'>
              <img src={badge}/>
              <img src={badge}/>
              <img src={badge}/>
            </div>
            <div className='profile-inventory__block-badges _second'>
              <img src={badge}/>
              <img src={badge}/>
              <img src={badge}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInventory;