import React from 'react';
import {shallow, mount} from 'enzyme'

import {Kitchen} from '../kitchen'

describe('<Kitchen />', () => {
    let fridge = [];
    let pantry = [];
    let searchItems = [];
    beforeAll(() => {
      for(let i=0; i<5; i++) {
        fridge.push({
          food: `food item ${i}`,
          container: 'fridge'
        })
      }
      for(let i=0; i<5; i++) {
        pantry.push({
          food: `food item ${i}`,
          container: 'pantry'
        })
      }
      for(let i=0; i<3; i++) {
        searchItems.push({
          food: `searchFood ${i}`
        })
      }
    })

  it('Renders without crashing', () => {
    shallow(<Kitchen
      fridge={fridge}
      pantry={pantry}
      searchItems={searchItems}
      />)
  })


})
