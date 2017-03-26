import React, {Component} from 'react';
import avatar from 'static/img/users/6.jpeg';

class ProfileCard extends Component {
  render() {
    return (
      <div className='profile-card'>
        <div className='profile-card__avatar'>
          <img src={avatar}
               width='100%'
               height='100%'/>
        </div>
        <div className='profile-card__data'>
          <div className='profile-card__data-block'>
            <div className='profile-card__data-name'>{this.props.user.name} {this.props.user.surname}</div>
            <div className='profile-card__data-profession'>{this.props.user.position}</div>
          </div>
          <div className='profile-card__data-block'>
            <div className='profile-card__data-email'>{this.props.user.email}</div>
            <div className='profile-card__data-phone'>{this.props.user.phone}</div>
          </div>
          <div className='profile-card__data-block'>
            <div className='profile-card__duties-title'>Обязанности</div>
            <div className='profile-card__duties-content'>Формирование клиентской базы</div>
          </div>
        </div>
        <div className='profile-card__chart'>
          <div className='profile-card__chart-top'>
            <div className='profile-card__chart-top-number'>{this.props.user.department_rating}</div>
            <div className='profile-card__chart-top-text'>место в рейтинге отдела</div>
          </div>
          <div className='profile-card__chart-bottom'>
            {this.props.user.rating} место в общем рейтинге
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;