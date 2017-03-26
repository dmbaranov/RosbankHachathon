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
              <MarketItem title='Подарочная корзина от Loccitane' img={1}/>
              <MarketItem title='Скидка 20 % на посещение фитнес-клуба ALEX FITNESS' img={2}/>
              <MarketItem title='Путешествие в Таиланд' img={3}/>
              <MarketItem title='Скидка 50% на посуду марки Luminarc' img={7}/>
              <MarketItem title='2 билета в Большой театр' img={8}/>
              <MarketItem title='Посещение тренинга по продажам' img={9}/>
            </div>
          </MarketPageBlock>
          <MarketPageBlock>
            <div className='market-page__goods-icon'>
              <img src={byDepartmentFlag}/>
            </div>
            <div className='market-page__content'>
              <MarketItem title='Дополнительный оплачиваемый отпуск' img={4}/>
              <MarketItem title='3 пятничных «отгула»' img={5}/>
              <MarketItem title='Чашечка кофе с Начальником отдела' img={6}/>
              <MarketItem title='1 день в роли Начальника отдела' img={10}/>
            </div>
          </MarketPageBlock>
        </div>
      </div>
    );
  }
}

export default MarketPage;