import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import itemImage from 'static/img/theatre.png';
import coin from 'static/img/coin.png';

class MarketItem extends Component {
  render() {
    return (
      <div className='market-item'>
        <div className='market-item__price'>
          <img src={coin}/>
          <div className='market-item__price-number'>15</div>
        </div>
        <div className='market-item__image'>
          <img src={itemImage}/>
        </div>
        <div className='market-item__title'>Название</div>
        <RaisedButton fullWidth label='Купить' buttonStyle={{background: '#b1ba1d', borderRadius: '5px'}}/>
      </div>
    );
  }
}

export default MarketItem;