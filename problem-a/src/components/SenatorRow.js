import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */
function SenatorRow(props) {
  const { senatorData } = props;
  const twitterUrl = `https://twitter.com/${senatorData.twitter}`;

  return (
    <tr>
      <td>{senatorData.name}</td>
      <td>{senatorData.state} - {senatorData.party.charAt(0)}</td>
      <td><a href={`tel:${senatorData.phone}`}>{senatorData.phone}</a></td>
      <td><a href={twitterUrl}>@{senatorData.twitter}</a></td>
    </tr>
  );
}

export default SenatorRow;