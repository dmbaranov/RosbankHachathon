import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import itemImage from 'static/img/theatre.png';
import coin from 'static/img/coin.png';

class MarketItem extends Component {
  render() {
    const img = require(`static/img/market/${this.props.img}.png`);
    return (
      <div className='market-item'>
        <div className='market-item__price'>
          <img src={coin}/>
          <div className='market-item__price-number'>15</div>
        </div>
        <div className='market-item__image'>
          <img src={img}/>
        </div>
        <div className='market-item__title'>{this.props.title}</div>
        <RaisedButton fullWidth label='Купить'
                      style={{position: 'absolute', bottom: '0'}}
                      labelStyle={{color: 'white'}}
                      buttonStyle={{background: '#b1ba1d', borderRadius: '5px'}}/>
      </div>
    );
  }
}

export default MarketItem;