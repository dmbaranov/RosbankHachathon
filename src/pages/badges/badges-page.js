import React, {Component} from 'react';
import BadgesPageBlock from 'components/badges-page-block/badges-page-block';
import BadgeComponent from 'components/badge/badge';
import professionalBadges from 'static/img/professional-badges.png';
import corporativeBadges from 'static/img/corporative-badges.png';

class BadgesPage extends Component {
  render() {
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
              <BadgeComponent/>
              <BadgeComponent/>
              <BadgeComponent/>
              <BadgeComponent/>
            </div>
          </BadgesPageBlock>
          <BadgesPageBlock>
            <div className='badges-page__title-flag'>
              <img src={corporativeBadges}/>
            </div>
            <div className='badges-page__description'>
              За определенные задания и заслуги можно получить не только баллы, но и почетные значки. Однажды полученные, они навсегда остаются в Вашем профиле, и каждый сотрудник может видеть Ваши заслуги!
            </div>
            <div className='badges-page__badges _small'>
              <BadgeComponent small/>
              <BadgeComponent small/>
              <BadgeComponent small/>
              <BadgeComponent small/>
              <BadgeComponent small/>
              <BadgeComponent small/>
              <BadgeComponent small/>
              <BadgeComponent small/>
            </div>
          </BadgesPageBlock>
        </div>
      </div>
    );
  }
}

export default BadgesPage;