import React, {Component} from 'react';

class Employee extends Component {
  render() {
    const image = require(`static/img/users/${this.props.index + 1}.jpeg`);
    return (
      <div className='employee'>
        <div className='employee__avatar'>
          <img src={image}/>
        </div>
        <div className='employee__name'>{this.props.data.name} {this.props.data.surname}</div>
        <div className='employee__position'>{this.props.data.position}</div>
      </div>
    );
  }
}

export default Employee;