import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import Footer from '../components/Footer';
import { get } from 'http';

afterEach(cleanup);

describe('Footer component', () => {
    it('should render without crashing', () => {
        render(<Footer />);
    });

    it('should match Snapshot', () => {
        const wrapper = render(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a subheading with my name', () => {
        const { getByText } = render(<Footer />);
        expect(getByText(/mario amaya/i)).toBeInTheDocument();
    });
});