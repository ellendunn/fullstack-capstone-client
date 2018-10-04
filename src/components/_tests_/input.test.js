import React from 'react';
import {shallow, mount} from 'enzyme'

import Input from '../input'

describe('<Input />', () => {
  let meta = {};
  it('Renders without crashing', () => {
    shallow(<Input meta={meta}/>)
  })


})
