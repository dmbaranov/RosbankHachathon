import React, {Component} from 'react';
import dailyProgress from 'static/img/daily-progress.png';
import dailyProgress2 from 'static/img/daily-progress2.png';
import dailyProgress3 from 'static/img/daily-progress3.png';

class DailyTasks extends Component {
  render() {
    return (
      <div className='daily-tasks'>
        <div className='daily-tasks__header'>
          <div className='daily-tasks__header-title'>Задания</div>
          <div className='daily-tasks__header-current'>Текущие</div>
          <div className='daily-tasks__header-completed'>Выполнено всего</div>
        </div>
        <div className='daily-tasks__content'>
          <div className='daily-tasks__line'>
            <div className='daily-tasks__line-title'>
              <div>Заключение контрактов</div>
            </div>
            <div className='daily-tasks__line-progress _completed'>
              <img src={dailyProgress}/>
            </div>
            <div className='daily-tasks__line-total'>25</div>
          </div>
          <div className='daily-tasks__line'>
            <div className='daily-tasks__line-title'>
              <div>Заключение контрактов на сумму от 100 000 р.</div>
            </div>
            <div className='daily-tasks__line-progress'>
              <img src={dailyProgress2}/>
            </div>
            <div className='daily-tasks__line-total'>9</div>
          </div>
          <div className='daily-tasks__line'>
            <div className='daily-tasks__line-title'>
              <div>Заключение контрактов с высокой маржинальностью</div>
            </div>
            <div className='daily-tasks__line-progress'>
              <img src={dailyProgress3}/>
            </div>
            <div className='daily-tasks__line-total'>3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyTasks;