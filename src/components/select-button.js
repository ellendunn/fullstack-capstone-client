import React from 'react';
import {
  addItemToSearch,
  removeItemFromSearch
} from '../actions/app';
import {connect} from 'react-redux';


export class SelectButton extends React.Component {
  state = {
    isSelected: false,
  }

  handleClick(foodItem) {
    this.setState(state => ({
      isSelected: !state.isSelected
    }), () => {
      if (this.state.isSelected) {
        this.props.dispatch(addItemToSearch(foodItem));
      } else {
        this.props.dispatch(removeItemFromSearch(foodItem))
      }
    });

  }

  render() {
    return (
      <button
        style={{background: this.state.isSelected ? "green" : "white" }}
        onClick={() => this.handleClick(this.props.name)}
        >
        Select
      </button>
    )
  }
}

export default connect()(SelectButton)
