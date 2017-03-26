import React, {Component} from 'react';
import wallet from 'static/img/wallet.png';
import badge1 from 'static/img/badges/13.png';
import badge2 from 'static/img/badges/14.png';
import badge3 from 'static/img/badges/1.png';
import badge4 from 'static/img/badges/2.png';
import badge5 from 'static/img/badges/3.png';
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
            <div className='profile-inventory__block-coins-amount'>{this.props.data.points}</div>
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
                  <div>Привлечение крупных клиентов</div>
                </div>
              </div>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge2}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Крупная сделка</div>
                </div>
              </div>
            </div>
            <div className='profile-inventory__block-badges _second'>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge3}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Строгий dress-код в течении месяца</div>
                </div>
              </div>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge4}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Украшение офиса к Новому Году</div>
                </div>
              </div>
              <div className='profile-inventory__badge'>
                <div className='profile-inventory__badge-img'>
                  <img src={badge5}/>
                </div>
                <div className='profile-inventory__badge-text'>
                  <div>Год без больничного отпуска</div>
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