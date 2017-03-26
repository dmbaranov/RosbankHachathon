import React, {Component} from 'react';
import MarketPageBlock from 'components/market-page-block/market-page-block';
import goodsFlag from 'static/img/goods-flag.png';
import byDepartmentFlag from 'static/img/by-department.png';
import MarketItem from 'components/market-item/market-item';

class MarketPage extends Component {
  render() {
    return (
      <div className='market-page'>
        <div className='market-page__wrapper'>
          <MarketPageBlock>
            <div className='market-page__goods-icon'>
              <img src={goodsFlag}/>
            </div>
            <div className='market-page__content'>
              <MarketItem/>
              <MarketItem/>
              <MarketItem/>
              <MarketItem/>
              <MarketItem/>
            </div>
          </MarketPageBlock>
          <MarketPageBlock>
            <div className='market-page__goods-icon'>
              <img src={byDepartmentFlag}/>
            </div>
            <div className='market-page__content'>
              <MarketItem/>
              <MarketItem/>
              <MarketItem/>
              <MarketItem/>
              <MarketItem/>
            </div>
          </MarketPageBlock>
        </div>
      </div>
    );
  }
}

export default MarketPage;