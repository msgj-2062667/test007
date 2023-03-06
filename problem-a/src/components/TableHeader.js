import React from 'react'; //import React library

/* Your code goes here */
function TableHeader(props) {
  const headingCells = props.columnNames.map((name) => (
    <th key={name}>{name}</th>
  ));
  return (
    <thead>
      <tr>{headingCells}</tr>
    </thead>
  );
}

export default TableHeader;