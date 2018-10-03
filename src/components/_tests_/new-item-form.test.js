import React from 'react';
import {shallow, mount} from 'enzyme'

import NewItemForm from '../new-item-form'

describe('<NewItemForm />', () => {
  it('Renders without crashing', () => {
    shallow(<NewItemForm />)
  })


})
