import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import VerticalMenu from 'components/vertical-menu/vertical-menu';
import HorizontalMenu from 'components/horizontal-menu/horizontal-menu';

class AppContainer extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
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

export default AppContainer;