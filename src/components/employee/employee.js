import React, {Component} from 'react';
import avatar from 'static/img/avatar.jpg';

class Employee extends Component {
  render() {
    return (
      <div className='employee'>
        <div className='employee__avatar'>
          <img src={avatar}/>
        </div>
        <div className='employee__name'>Анна Петрова</div>
        <div className='employee__position'>Менеджер по продажам</div>
      </div>
    );
  }
}

export default Employee;