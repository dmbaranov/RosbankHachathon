import React, {Component} from 'react';
import ProfileBlock from 'components/profile-page-block/profile-page-block';
import ProfileCard from 'components/profile-card/profile-card';

class ProfilePage extends Component {
  render() {
    return (
      <div className='profile-page'>
        <div className='profile-page__wrapper'>
          <ProfileBlock>
            <ProfileCard/>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileCard/>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileCard/>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileCard/>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileCard/>
          </ProfileBlock>
        </div>
      </div>
    );
  }
}

export default ProfilePage;