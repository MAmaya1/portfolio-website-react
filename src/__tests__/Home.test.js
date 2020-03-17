import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import HomePage from '../components/HomePage';

afterEach(cleanup);

describe('HomePage component', () => {
    it('should render component without crashing', () => {
        render(<HomePage />);
    })

    it('should match Snapshot', () => {
        const wrapper = render(<HomePage />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an heading with my name', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('Mario')).toBeInTheDocument();
    });

    it('should render a subheading with a job title', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('React Developer')).toBeInTheDocument();
    });
})