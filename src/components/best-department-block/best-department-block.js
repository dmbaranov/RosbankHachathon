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
            Хочу сказать спасибо каждому из вас за ваше трудолюбие и приложенные усилия для достижения поставленных задач! Наши показатели выросли на 30% по сравнению с предыдщим периодом! Вы - самый лучший отдел!
            <div>С уважением, Скобеева Анна</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BestDepartmentBlock;