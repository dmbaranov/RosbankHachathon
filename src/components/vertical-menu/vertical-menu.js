import React, {Component} from 'react';
import {Link} from 'react-router';
import ReactSVG from 'react-svg';
import profile from 'static/img/profile.svg';
import market from 'static/img/market-icon.svg';
import department from 'static/img/department-icon.svg';
import badge from 'static/img/badge-icon.svg';

class VerticalMenu extends Component {
  static MENU_BUTTONS = [{
    label: 'Профиль',
    icon: profile,
    url: '/profile'
  }, {
    label: 'Отдел',
    icon: department,
    url: '/departments'
  }, {
    label: 'Маркет',
    icon: market,
    url: '/market'
  }, {
    label: 'Значки',
    icon: badge,
    url: '/badges'
  }];

  // return (
  //   <RaisedButton fullWidth
  //                 key={index}
  //                 onTouchTap={this.redirectUser.bind(this, item.url)}
  //                 style={{height: '50px'}}
  //                 buttonStyle={{background: 'black', color: 'white'}}
  //                 label={item.label}
  //                 labelStyle={{lineHeight: '50px', color: 'white'}}/>
  // );
  generateMenuButtons() {
    return VerticalMenu.MENU_BUTTONS.map((item, index) => {
      return (
        <Link to={item.url}
              key={index}
              className='vertical-menu__item'>
          <div className='vertical-menu__item-icon'>
            <ReactSVG path={item.icon}/>
          </div>
          <div className='vertical-menu__item-text'>
            {item.label}
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className='vertical-menu'>
        <div className='vertical-menu__container _top'>
           <Link to='/' className='vertical-menu__item _logo'>
             PLAY-Bank
           </Link>
        </div>
        <div className='vertical-menu__container _center'>
          {this.generateMenuButtons()}
        </div>
      </div>
    );
  }
}

export default VerticalMenu;