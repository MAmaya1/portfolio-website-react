import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('should render App without crashing', () => {
    render(<App />);  
  });

  it('should match Snapshot', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})