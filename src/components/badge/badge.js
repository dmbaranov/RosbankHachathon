import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import tripleCoin from 'static/img/triple-coin.png';
import doubleCoin from 'static/img/double-coin.png';

class Badge extends Component {
  static propTypes = {
    small: PropTypes.bool
  };

  render() {
    const {data} = this.props;
    const classes = classnames('badge', {
      '_small': this.props.small
    });

    console.log(data[0]);
    const image = require(`static/img/badges/${data[0]}.png`);

    return (
      <div className={classes}>
        <div className='badge__image'>
          <img src={image}/>
        </div>
        <div className='badge__reason'>{data[1]}</div>
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