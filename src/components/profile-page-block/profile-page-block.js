import React, {Component} from 'react';

class ProfileBlock extends Component {
  render() {
    return (
      <div className='profile-page-block'>
        {this.props.children}
      </div>
    );
  }
}

export default ProfileBlock;