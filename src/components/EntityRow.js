import React from 'react';
import { Link } from 'react-router-dom'

const EntityRow = (props) => (
  <tr>
    <td>
      <Link to={`/chain-detail/${props.chainId}`}>
        <div>{ props.chainId }</div>
      </Link>
    </td>
  </tr>
);

export default EntityRow;