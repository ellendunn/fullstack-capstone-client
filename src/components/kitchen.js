import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import FoodContainer from './food-container';

import './kitchen.css'

export class Kitchen extends React.Component {
  state = {
    submitted: false,
    loading: false
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/recipes" />
    }

    return (
      <div>
        <div>
          <h3>Select items in your fridge and pantry to find recipes</h3>
          {this.props.searchItems}
          <button type="submit">What can I cook?</button>
        </div>
        <div className="kitchen">
          <FoodContainer name="Fridge" items={this.props.items}/>
          <FoodContainer name="Pantry" items={this.props.items}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchItems: state.searchItems
})

export default connect (mapStateToProps)(Kitchen)
