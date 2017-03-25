import React, {Component} from 'react';
import avatar from 'static/img/avatar.jpg';

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
            <div className='profile-card__data-name'>Елена Шлыкова</div>
            <div className='profile-card__data-profession'>Менеджер по продажам</div>
          </div>
          <div className='profile-card__data-block'>
            <div className='profile-card__data-email'>someemail@gmail.com</div>
            <div className='profile-card__data-phone'>8-999-123-62-33</div>
          </div>
          <div className='profile-card__data-block'>
            <div className='profile-card__duties-title'>Обязанности</div>
            <div className='profile-card__duties-content'>Продажа чего-то там</div>
          </div>
        </div>
        <div className='profile-card__chart'>
          <div className='profile-card__chart-top'>
            <div className='profile-card__chart-top-number'>15</div>
            <div className='profile-card__chart-top-text'>место в рейтинге отдела</div>
          </div>
          <div className='profile-card__chart-bottom'>
            235 место в общем рейтинге
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;