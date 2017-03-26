import React, {Component} from 'react';
import dailyProgress from 'static/img/daily-progress1-textless.png';
import dailyProgress2 from 'static/img/daily-progress2-textless.png';
import myTasks from 'static/img/my-tasks.png';

class DailyTasks extends Component {
  render() {
    return (
      <div className='daily-tasks'>
        <div className='daily-tasks__header'>
          <div className='daily-tasks__header-title'>
            <img src={myTasks}/>
          </div>
          <div className='daily-tasks__header-current'>Прогресс</div>
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
            <div className='daily-tasks__line-total'>15 из 15</div>
          </div>
          <div className='daily-tasks__line'>
            <div className='daily-tasks__line-title'>
              <div>Заключение контрактов на сумму от 100 000 р.</div>
            </div>
            <div className='daily-tasks__line-progress'>
              <img src={dailyProgress2}/>
            </div>
            <div className='daily-tasks__line-total'>2 из 5</div>
          </div>
          <div className='daily-tasks__line'>
            <div className='daily-tasks__line-title'>
              <div>Заключение контрактов с высокой маржинальностью</div>
            </div>
            <div className='daily-tasks__line-progress'>
              <img src={dailyProgress2}/>
            </div>
            <div className='daily-tasks__line-total'>4 из 10</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DailyTasks;