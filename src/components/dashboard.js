import React from 'react';

import Kitchen from './kitchen';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>My Kitchen & Pantry</h1>
        <Kitchen />
      </div>
    )
  }

}
