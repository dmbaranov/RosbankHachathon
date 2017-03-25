import React, {Component} from 'react';
import ProfileBlock from 'components/profile-page-block/profile-page-block';
import ProfileCard from 'components/profile-card/profile-card';
import ProfileInventory from 'components/profile-inventory/profile-inventory';
import QuoterPlan from 'components/quoter-plan/quoter-plan';
import DailyTasks from 'components/daily-tasks/daily-tasks';
import RecentActivity from 'components/recent-activity/recent-activity';

class ProfilePage extends Component {
  render() {
    fetch('http://rsb-linuxvm-13.northeurope.cloudapp.azure.com:8080/api/user?api_token=token-12').then(data => {
      console.log(data);
      data.json().then(result => {
        console.log(result);
      });
    });
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
          <QuoterPlan/>
          <RecentActivity/>
        </div>
      </div>
    );
  }
}

export default ProfilePage;