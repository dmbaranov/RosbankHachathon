import React, {Component} from 'react';
import BestDepartmentBlock from 'components/best-department-block/best-department-block';
import MainPageBlock from 'components/main-page-block/main-page-block';
import Employee from 'components/employee/employee';
import Department from 'components/department/department';
import topEmployeesFlag from 'static/img/top-employees-flag.png';
import topDepartmentsFlag from 'static/img/top-departments-flag.png';

class MainPage extends Component {
  render() {
    return (
      <div className='main-page'>
        <div className='main-page__wrapper'>
          <BestDepartmentBlock/>
          <MainPageBlock>
            <div className='main-page__block-icon'>
              <img src={topEmployeesFlag}/>
            </div>
            <div className='main-page__block-content'>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
              <Employee/>
            </div>
          </MainPageBlock>
          <MainPageBlock>
            <div className='main-page__block-icon'>
              <img src={topDepartmentsFlag}/>
            </div>
            <div className='main-page__block-content _departments'>
              <Department/>
              <Department/>
              <Department/>
            </div>
          </MainPageBlock>
        </div>
      </div>
    );
  }
}

export default MainPage;