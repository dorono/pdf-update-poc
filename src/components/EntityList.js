import React from 'react';

import EntityRow from './EntityRow';

const EntityRows = (props) => {
  return props.entityList.map((chain, idx) => {
    return (
      <EntityRow
        chainId={chain.chain_id}
        key={`chain_${idx}`}
      />
    )
  });
}

const EntityList = (props) => (
  <table
    className="pdfList"
  >
    <tbody>
      <EntityRows
        entityList={props.entities}
      />
    </tbody>
  </table>
);

export default EntityList;
