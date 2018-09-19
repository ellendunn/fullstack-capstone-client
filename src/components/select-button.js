import React from 'react';
import {
  addItemToSearch,
  removeItemFromSearch
} from '../actions/app';
import {connect} from 'react-redux';


export class SelectButton extends React.Component {
  state= {
    isSelected: true
  }

  handleClick(foodItem) {
    this.setState(state => ({
      isSelected: !state.isSelected
    }));

    if (this.state.isSelected === true) {
      return this.props.dispatch(addItemToSearch(foodItem));
    } else if (this.state.isSelected === false) {
      return this.props.dispatch(removeItemFromSearch(foodItem))
    }

  }

  render() {
    return (
      <button onClick={() => this.handleClick(this.props.name)}>
      Select
      </button>
    )
  }
}

const mapStateToProps = state => ({

});


export default connect (mapStateToProps)(SelectButton)
