import React, {Component} from 'react';
import topDepartment from 'static/img/top-department.png';

class BestDepartmentBlock extends Component {
  render() {
    return (
      <div className='best-department-block'>
        <div className='best-department-block__chart'>
          <div className='best-department-block__chart-number'>1</div>
          <div className='best-department-block__chart-text'>место в рейтинге отделов</div>
        </div>
        <div className='best-department-block__image'>
          <img src={topDepartment}/>
        </div>
        <div className='best-department-block__welcome'>
          <div className='best-department-block__welcome-title'>Приветственное слово отдела-лидера недели:</div>
          <div className='best-department-block__welcome-text'>
            Это была сложная неделя, но благодаря сплоченному коллективу и командной работе мы смогли взять первое место! Благодарим всех коллег, причастных к этому, а также желаем всему коллективу отличной недели!
          </div>
        </div>
      </div>
    );
  }
}

export default BestDepartmentBlock;