import React, {Component} from 'react';
import ReactTable from 'react-table'
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

const data = [{
  name: 'Иванов И.И.',
  position: 'Менеджер',
  points: 30,
  madeContracts: 15,
  clients: 27,
  contractsSum: 10000
}, {
  name: 'Петров П.П.',
  position: 'Кто-то',
  points: 60,
  madeContracts: 25,
  clients: 37,
  contractsSum: 30000
}, {
  name: 'Михайлов М.М.',
  position: 'Энибади',
  points: 10,
  madeContracts: 5,
  clients: 7,
  contractsSum: 300
}];


class DepartmentsPage extends Component {
  render() {
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

export default DepartmentsPage;