import React from 'react';
import {shallow, mount} from 'enzyme'

import {FoodContainer} from '../food-container'

describe('<FoodContainer />', () => {
    let items = [];
    beforeAll(() => {
      for(let i=0; i<5; i++) {
        items.push({
          food: `food item ${i}`,
          id: i
        })
      }
    })

  it('Renders without crashing', () => {
    shallow(<FoodContainer items={items}/>)
  })


})
