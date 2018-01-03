import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug());
  expect(true).toEqual(true);
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
});
