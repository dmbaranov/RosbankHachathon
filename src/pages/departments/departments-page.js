import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactTable from 'react-table';
import DepartmentsPageBlock from 'components/departments-page-block/departments-page-block';
import DepartmentsPageEmptyBlock from 'components/departments-page-empty-block/departments-page-empty-block';
import employeesFlag from 'static/img/employees-flag.png';

const columns = [{
  columns: [{
    header: 'ФИО',
    accessor: 'name'
  }, {
    header: 'Должность',
    accessor: 'position',
  }, {
    header: 'Баллы',
    accessor: 'points',
  }, {
    header: 'Заключено договоров',
    accessor: 'madeContracts',
  }, {
    header: 'Новые клиенты',
    accessor: 'clients',
  }, {
    header: ' Сумма всех договоров',
    accessor: 'contractsSum',
  }]
}];

class DepartmentsPage extends Component {
  render() {
    const data = this.props.users.map(item => {
      return {
        name: `${item.name} ${item.surname}`,
        position: item.position,
        points: item.points,
        madeContracts: item.contracts_count,
        clients: item.clients_count,
        contractsSum: item.contracts_sum
      };
    });
    return (
      <div className='departments-page'>
        <div className='departments-page__wrapper'>
          <DepartmentsPageBlock/>
          <DepartmentsPageEmptyBlock>
            <div className='departments-page__empty-block-flag'>
              <img src={employeesFlag}/>
            </div>
            <div className='departments-page__empty-block-content'>
              <ReactTable
                data={data}
                columns={columns}
                defaultPageSize={10}
              />
            </div>
          </DepartmentsPageEmptyBlock>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.allUsers
  };
}

export default connect(mapStateToProps, null)(DepartmentsPage);
// export default DepartmentsPage;