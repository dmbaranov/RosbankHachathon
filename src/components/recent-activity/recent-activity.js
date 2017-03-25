import React, {Component} from 'react';

class RecentActivity extends Component {
  render() {
    return (
      <div className='recent-activity'>
        <div className='recent-activity__title'>Недавняя активность</div>
        <div className='recent-activity__content'>
          <div className='recent-activity__item'>
            <div className='recent-activity__item-text'>Получен значок "Сотрудник месяца"</div>
          </div>
          <div className='recent-activity__item'>
            <div className='recent-activity__item-text'>Получен значок "Сотрудник месяца"</div>
          </div>
          <div className='recent-activity__item'>
            <div className='recent-activity__item-text'>Получен значок "Сотрудник месяца"</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentActivity;