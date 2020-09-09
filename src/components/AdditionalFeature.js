import React from 'react';
import {connect} from 'react-redux'

import {addFeatures} from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* {console.log(props.feature.id)} */}
      <button className="button" onClick={() => props.addFeatures(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null, {addFeatures})(AdditionalFeature);
