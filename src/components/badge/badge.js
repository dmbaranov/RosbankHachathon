import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import badge1 from 'static/img/badge1.png';
import tripleCoin from 'static/img/triple-coin.png';
import doubleCoin from 'static/img/double-coin.png';

class Badge extends Component {
  static propTypes = {
    small: PropTypes.bool
  };

  render() {
    const classes = classnames('badge', {
      '_small': this.props.small
    });

    return (
      <div className={classes}>
        <div className='badge__image'>
          <img src={badge1}/>
        </div>
        <div className='badge__reason'>За выполнение достижения</div>
        <div className='badge__price'>
          {
            this.props.small
              ? <img src={doubleCoin}/>
              : <img src={tripleCoin}/>
          }
          <div className='badge__price-text'>20</div>
        </div>
      </div>
    );
  }
}

export default Badge;