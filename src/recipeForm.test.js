import React from 'react';
import { shallow } from 'enzyme';
import RecipeForm from './recipeForm';

it('has a form with a field name of Title', () => {
  const wrapper = shallow(<RecipeForm />);
  expect(wrapper.find('.recipe-form').exists()).toEqual(true);
});

it('has a form with a submit button', () => {
  const wrapper = shallow(<RecipeForm />);
  expect(wrapper.find('.recipe-submit').exists()).toEqual(true);
});
