import React from 'react';
import { connect } from 'dva';

const Table = () => {
  return (
    <div>
      Table
    </div>
  );
};

Table.propTypes = {
};

export default connect(({table}) => {
  return table
})(Table);
