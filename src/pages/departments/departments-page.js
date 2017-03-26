import React, {Component} from 'react';
import DepartmentsPageBlock from 'components/departments-page-block/departments-page-block';

class DepartmentsPage extends Component {
  render() {
    return (
      <div className='departments-page'>
        <div className='departments-page__wrapper'>
          <DepartmentsPageBlock/>
        </div>
      </div>
    );
  }
}

export default DepartmentsPage;