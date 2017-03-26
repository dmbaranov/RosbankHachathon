import React, {Component} from 'react';
import boughts3 from 'static/img/boughts3.png';
import coin from 'static/img/coin.png';
import good1 from 'static/img/good1.png';
import good2 from 'static/img/good2.png';
import good3 from 'static/img/good3.png';

class RecentActivity extends Component {
  render() {
    return (
      <div className='recent-activity'>
        <div className='recent-activity__title'>
          <img src={boughts3}/>
        </div>
        <div className='recent-activity__content'>
          <div className='recent-activity__item'>
            <div className='recent-activity__item-icon'>
              <img src={good1}/>
            </div>
            <div className='recent-activity__item-text'>Скидка 70% на посуду "Ральф"</div>
            <div className='recent-activity__item-coin'>
              <div className='recent-activity__item-coin-price'>5</div>
              <img src={coin}/>
            </div>
          </div>
          <div className='recent-activity__item'>
            <div className='recent-activity__item-icon'>
              <img src={good2}/>
            </div>
            <div className='recent-activity__item-text'>Подарочная корзина от Loccitane</div>
            <div className='recent-activity__item-coin'>
              <div className='recent-activity__item-coin-price'>5</div>
              <img src={coin}/>
            </div>
          </div>
          <div className='recent-activity__item'>
            <div className='recent-activity__item-icon'>
              <img src={good3}/>
            </div>
            <div className='recent-activity__item-text'>2 билета в Большой Театр</div>
            <div className='recent-activity__item-coin'>
              <div className='recent-activity__item-coin-price'>5</div>
              <img src={coin}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentActivity;