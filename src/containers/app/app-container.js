import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import VerticalMenu from 'components/vertical-menu/vertical-menu';
import HorizontalMenu from 'components/horizontal-menu/horizontal-menu';

import * as profileActions from 'actions/profile-actions.js';
import * as badgesActions from 'actions/badges-actions.js';
import * as marketActions from 'actions/market-actions.js';

class AppContainer extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
  }

  componentDidMount() {
    this.props.profileActions.getCurrentProfile();
    this.props.profileActions.getAllUsers();
    this.props.badgesActions.getBadges();
    // this.props.marketActions.getGoods();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='app-container'>
          <VerticalMenu/>
          <HorizontalMenu/>
          <div className='app-container__content'>
             {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileActions: bindActionCreators(profileActions, dispatch),
    badgesActions: bindActionCreators(badgesActions, dispatch),
    marketActions: bindActionCreators(marketActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
// export default AppContainer;