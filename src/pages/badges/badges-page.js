import React, {Component} from 'react';
import {connect} from 'react-redux';
import BadgesPageBlock from 'components/badges-page-block/badges-page-block';
import BadgeComponent from 'components/badge/badge';
import professionalBadges from 'static/img/professional-badges.png';
import corporativeBadges from 'static/img/corporative-badges.png';

class BadgesPage extends Component {
  render() {
    const normalBadges = [];
    const hardBadges = [];
    this.props.badges.forEach(item => {
      const badgeType = item[2];
      if (badgeType === 1) {
        normalBadges.push(item);
      }
      else {
        hardBadges.push(item);
      }
    });

    const normalElements = normalBadges.map(item => {
      return (
        <BadgeComponent key={item[1]}
                        data={item}
                        small/>
      );
    });

    const hardElements = hardBadges.map(item => {
      return (
        <BadgeComponent key={item[1]} data={item}/>
      );
    });

    return (
      <div className='badges-page'>
        <div className='badges-page__wrapper'>
          <BadgesPageBlock>
            <div className='badges-page__title-flag'>
              <img src={professionalBadges}/>
            </div>
            <div className='badges-page__description'>
              За определенные задания и заслуги можно получить не только баллы, но и почетные значки. Однажды полученные, они навсегда остаются в Вашем профиле, и каждый сотрудник может видеть Ваши заслуги!
            </div>
            <div className='badges-page__badges'>
              {hardElements}
            </div>
          </BadgesPageBlock>
          <BadgesPageBlock>
            <div className='badges-page__title-flag'>
              <img src={corporativeBadges}/>
            </div>
            <div className='badges-page__description'>
              Данные значки поощряют сотрудников за проявление корпоративных компетенций в работе, что в дальнейшем позволит сформировать профиль достижений сотрудника.
            </div>
            <div className='badges-page__badges _small'>
              {normalElements}
            </div>
          </BadgesPageBlock>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    badges: state.badges.badges
  };
}

export default connect(mapStateToProps, null)(BadgesPage);