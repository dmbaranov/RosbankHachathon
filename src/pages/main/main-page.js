import React, {Component} from 'react';
import BestDepartmentBlock from 'components/best-department-block/best-department-block';
import MainPageBlock from 'components/main-page-block/main-page-block';

class MainPage extends Component {
  render() {
    return (
      <div className='main-page'>
        <div className='main-page__wrapper'>
          <BestDepartmentBlock/>
          <MainPageBlock>
            qew
          </MainPageBlock>
          <MainPageBlock>
            qwe
          </MainPageBlock>
        </div>
      </div>
    );
  }
}

export default MainPage;