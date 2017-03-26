import React, {Component} from 'react';
import wallet from 'static/img/wallet.png';
import badge1 from 'static/img/badge1.jpg';
import myCoins from 'static/img/my-coins.png';

class ProfileInventory extends Component {
  render() {
    return (
      <div className='profile-inventory'>
        <div className='profile-inventory__block'>
          <div className='profile-inventory__block-title'>
            <img src={myCoins}/>
          </div>
          <div className='profile-inventory__block-content _wallet'>
            <img className='profile-inventory__block-coins-image' src={wallet}/>
            <div className='profile-inventory__block-coins-amount'>123</div>
          </div>
        </div>
        <div className='profile-inventory__block _badges'>
          <div className='profile-inventory__block-title'>Мои значки</div>
          <div className='profile-inventory__block-content'>
            <div className='profile-inventory__block-badges'>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge1}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Сотрудник месяца</div>
                </div>
              </div>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge1}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Сотрудник месяца</div>
                </div>
              </div>
            </div>
            <div className='profile-inventory__block-badges _second'>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge1}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Сотрудник месяца</div>
                </div>
              </div>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge1}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Сотрудник месяца</div>
                </div>
              </div>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge1}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Сотрудник месяца</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInventory;