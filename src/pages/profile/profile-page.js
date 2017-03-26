import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProfileBlock from 'components/profile-page-block/profile-page-block';
import ProfileCard from 'components/profile-card/profile-card';
import ProfileInventory from 'components/profile-inventory/profile-inventory';
import QuoterPlan from 'components/quoter-plan/quoter-plan';
import DailyTasks from 'components/daily-tasks/daily-tasks';
import RecentActivity from 'components/recent-activity/recent-activity';

class ProfilePage extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className='profile-page'>
        <div className='profile-page__wrapper'>
          <ProfileBlock>
            <ProfileCard user={this.props.user}/>
          </ProfileBlock>
          <ProfileBlock>
            <ProfileInventory data={this.props.user}/>
          </ProfileBlock>
          <DailyTasks/>
          <RecentActivity/>
          <QuoterPlan/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps, null)(ProfilePage);
// export default ProfilePage;