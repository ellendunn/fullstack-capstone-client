import React from 'react';
import {shallow, mount} from 'enzyme'

import Input from '../input'

describe('<Input />', () => {
  let meta = {
    touched: false,
    error: null
  };

  let input = {
    name: '',
    type: ''
  }
  it('Renders without crashing', () => {
    shallow(<Input meta={meta} input={input}/>)
  })


})
