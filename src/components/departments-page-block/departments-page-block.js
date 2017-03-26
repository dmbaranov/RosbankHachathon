import React, {Component} from 'react';
import topDepartment from 'static/img/top-department.png';
import avatar from 'static/img/avatar.jpg';

class DepartmentsPageBlock extends Component {
  render() {
    return (
      <div className='departments-page-block'>
        <div className='departments-page-block__chart'>
          <div className='departments-page-block__chart-number'>1</div>
          <div className='departments-page-block__chart-text'>место в рейтинге отделов</div>
        </div>
        <div className='departments-page-block__leader'>
          <div className='departments-page-block__leader-avatar'>
            <img src={avatar}/>
          </div>
          <div className='departments-page-block__leader-name'>Скобеева Анна</div>
          <div className='departments-page-block__leader-position'>начальник отдела</div>
        </div>
        <div className='departments-page-block__image'>
          <img src={topDepartment}/>
        </div>
        <div className='departments-page-block__welcome'>
          <div className='departments-page-block__welcome-title'>Дорогие коллеги!</div>
          <div className='departments-page-block__welcome-text'>
            Это была сложная неделя, но благодаря сплоченному коллективу и командной работе мы смогли взять первое место! Благодарим всех коллег, причастных к этому, а также желаем всему коллективу отличной недели!
          </div>
        </div>
      </div>
    );
  }
}

export default DepartmentsPageBlock;