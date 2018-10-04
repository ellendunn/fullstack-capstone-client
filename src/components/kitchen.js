import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import swal from 'sweetalert';

import FoodContainer from './food-container';

import './kitchen.css'

export class Kitchen extends React.Component {
  state = {
    submitted: false
  }


  submitSearch(items) {
    if (items.length) {
      this.setState(state => ({submitted: true}));
    } else {
      swal({
        title: "You have not selected any ingredients!",
        icon: "warning"
      })
    }
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/recipes" />
    }

    const searchTerms = () => {
      if (this.props.searchItems.length) {
        return this.props.searchItems.map((item, index) => (
          <li key={index} className="search-term">
            {item}
          </li>
        ))
      }
    }

    const searchButton = () => {
      if(this.props.searchItems.length) {
        return (
          <button
              onClick={() => this.submitSearch(this.props.searchItems)}
              type="submit"
              className="recipe-search-button">
              What can I cook with these ingredients?
          </button>
        )
      }
    }


    return (
      <div className="kitchen">
        <div className="recipe-search-info">
          <h3>Select items in your fridge and pantry to find new recipes!</h3>
          <div>
            <ul className="search-items">
              {searchTerms()}
            </ul>
          </div>
        {searchButton()}
        </div>
        <div className="containers">
          <FoodContainer name="Fridge" items={this.props.fridge}/>
          <FoodContainer name="Pantry" items={this.props.pantry}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchItems: state.app.searchItems,
  fridge: state.app.fridge,
  pantry: state.app.pantry
})

export default connect (mapStateToProps)(Kitchen)
