import React, {Component} from 'react';
import {Link} from 'react-router';
import profile from 'static/img/profile.png';

class VerticalMenu extends Component {
  static MENU_BUTTONS = [{
    label: 'Главная',
    url: '/'
  }, {
    label: 'Профиль',
    url: '/profile'
  }, {
    label: 'Отдел',
    url: '#'
  }, {
    label: 'Маркет',
    url: '/market'
  }, {
    label: 'Значки',
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
        <Link to={item.url} key={index} className='vertical-menu__item'>
          <img src={profile} className='vertical-menu__item-icon'/>
          {item.label}
        </Link>
      );
    });
  }

  render() {
    return (
      <div className='vertical-menu'>
        <div className='vertical-menu__container _top'>
           <div className='vertical-menu__item _logo'>
             PLAY-Bank
             {/*<img alt='icon' src={rb} width='80%' height='80%'/>*/}
           </div>
        </div>
        <div className='vertical-menu__container _center'>
          {this.generateMenuButtons()}
        </div>
      </div>
    );
  }
}

export default VerticalMenu;