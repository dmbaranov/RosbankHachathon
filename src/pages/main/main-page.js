import React, {Component} from 'react';
import {connect} from 'react-redux';
import BestDepartmentBlock from 'components/best-department-block/best-department-block';
import MainPageBlock from 'components/main-page-block/main-page-block';
import Employee from 'components/employee/employee';
import Department from 'components/department/department';
import topEmployeesFlag from 'static/img/top-employees-flag.png';
import topDepartmentsFlag from 'static/img/top-departments-flag.png';

class MainPage extends Component {
  render() {
    const {allUsers = []} = this.props;
    const topUsers = allUsers.slice(0, 10).map((item, index) => {
      return (
        <Employee key={item.id}
                  data={item}
                  index={index}/>
      );
    });

    return (
      <div className='main-page'>
        <div className='main-page__wrapper'>
          <BestDepartmentBlock/>
          <MainPageBlock>
            <div className='main-page__block-icon'>
              <img src={topEmployeesFlag}/>
            </div>
            <div className='main-page__block-content'>
              {topUsers}
            </div>
          </MainPageBlock>
          <MainPageBlock>
            <div className='main-page__block-icon'>
              <img src={topDepartmentsFlag}/>
            </div>
            <div className='main-page__block-content _departments'>
              <Department place={1}/>
              <Department place={2}/>
              <Department place={3}/>
            </div>
          </MainPageBlock>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.user.allUsers
  };
}

export default connect(mapStateToProps, null)(MainPage);