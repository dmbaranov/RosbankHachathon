import React, {Component} from 'react';
// import department from 'static/img/department.png';

class Department extends Component {
  render() {
    const department = require(`static/img/department${this.props.place}.png`);
    // console.log(this.props.place);
    return (
      <div className='department'>
        <img src={department}/>
      </div>
    );
  }
}

export default Department;