import React, {Component} from 'react';
import department from 'static/img/department.png';

class Department extends Component {
  render() {
    return (
      <div className='department'>
        <img src={department}/>
      </div>
    );
  }
}

export default Department;