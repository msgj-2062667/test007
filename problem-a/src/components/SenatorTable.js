import React from 'react'; //import React library
import TableHeader from './TableHeader';
import SenatorRow from './SenatorRow';

/* Your code goes here */
function SenatorTable(props) {
  const columnNames = ['Name', 'State', 'Phone', 'Twitter'];
  const senatorRows = props.senatorsList.map((senator) => (
    <SenatorRow key={senator.id} senatorData={senator} />
  ));
  return (
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames} />
      <tbody>
        {senatorRows}
      </tbody>
    </table>
  );
}

export default SenatorTable;