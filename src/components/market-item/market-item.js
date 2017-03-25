import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import marketItem from 'static/img/market-item.png';

class MarketItem extends Component {
  render() {
    return (
      <div className='market-item'>
        <div className='market-item__title'>Название</div>
        <div className='market-item__image'>
          <img src={marketItem}/>
        </div>
        <RaisedButton fullWidth label='Купить'/>
      </div>
    );
  }
}

export default MarketItem;