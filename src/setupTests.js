import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme'

configure({ adapter: new Adapter() });

import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

Enzyme.configure({ adapter: new Adapter() });
console.warn = (...args) => {
  throw new Error(...args).replace(/^Error: (?:Warning: )?/, '');
};
