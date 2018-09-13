import React from 'react';
import Fridge from './fridge';
import Pantry from './pantry';

export default class Kitchen extends React.Component {
  state = {
    submitted: false,
    loading: false
  }

  render() {
    if (this.state.submitted) {
      // return <Redirect to="/recipes" />
    }

    return (
      <div>
        <div>
          <h3>Select items in your fridge and pantry to find recipes</h3>
          <button type="submit">What can I cook?</button>
        </div>
        <Fridge />
        <Pantry />
      </div>
    )
  }
}
