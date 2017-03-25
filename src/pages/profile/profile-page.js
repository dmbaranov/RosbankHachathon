import React, {Component} from 'react';
import ProfileBlock from 'components/profile-page-block/profile-page-block';
import ProfileCard from 'components/profile-card/profile-card';
import ProfileInventory from 'components/profile-inventory/profile-inventory';
import QuoterPlan from 'components/quoter-plan/quoter-plan';

class ProfilePage extends Component {
  render() {
    return (
      <div className='profile-page'>
        <div className='profile-page__wrapper'>
          <ProfileBlock>
            <ProfileCard/>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileInventory/>
          </ProfileBlock>
          <QuoterPlan/>
        </div>
      </div>
    );
  }
}

export default ProfilePage;