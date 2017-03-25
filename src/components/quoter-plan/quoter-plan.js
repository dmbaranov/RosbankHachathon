import React, {Component} from 'react';
import quoterProgress from 'static/img/quoter-progress.png';

class QuoterPlan extends Component {
  render() {
    return (
      <div className='quoter-plan'>
        <div className='quoter-plan__title'>Квартальный план</div>
        <div className='quoter-plan__progress'>
          <div className='quoter-plan__progress-img'>
            <img src={quoterProgress}/>
          </div>
          <div className='quoter-plan__progress-number'>53</div>
        </div>
      </div>
    );
  }
}

export default QuoterPlan;