import React, { PropTypes } from 'react';


const App = (props) => {
  return (
    <div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

// App.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default App;