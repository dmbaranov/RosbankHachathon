import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MarketItem from 'components/market-item/market-item';

class MarketPage extends Component {
  render() {
    return (
      <div className='market-page'>
        <div className='market-page__wrapper'>
          <div className='market-page__title'>Магазин</div>
          <Tabs className='market-page__tabs'>
            <Tab label='Товары'
                 icon={<MapsPersonPin/>}
                 style={{background: 'red', color: 'black'}}>
              <div className='market-page__tabs-content'>
                <MarketItem/>
                <MarketItem/>
                <MarketItem/>
                <MarketItem/>
                <MarketItem/>
              </div>
            </Tab>
            <Tab label='Мои покупки'
                 icon={<MapsPersonPin/>}
                 style={{background: 'red', color: 'black'}}>
              <div className='market-page__tabs-content'>
                <MarketItem/>
                <MarketItem/>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default MarketPage;