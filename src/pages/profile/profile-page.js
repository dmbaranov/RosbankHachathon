import React, {Component} from 'react';
import ProfileBlock from 'components/profile-page-block/profile-page-block';
import ProfileCard from 'components/profile-card/profile-card';
import ProfileInventory from 'components/profile-inventory/profile-inventory';
import QuoterPlan from 'components/quoter-plan/quoter-plan';
import DailyTasks from 'components/daily-tasks/daily-tasks';
import RecentActivity from 'components/recent-activity/recent-activity';

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
          <DailyTasks/>
          <RecentActivity/>
          <QuoterPlan/>
        </div>
      </div>
    );
  }
}

export default ProfilePage;