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

    it('should render a heading with my name', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText(/mario/i)).toBeInTheDocument();
    });

    it('should render a subheading with a job title', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText(/react developer/i)).toBeInTheDocument();
    });

    it('should have a valid link to LinkedIn profile', () => {
        const { getByTestId } = render(<HomePage />);
        expect(getByTestId(/linkedin/i)).toHaveAttribute('href', 'https://www.linkedin.com/in/marioamayaweb');
    });

    it('should have a valid link to GitHub profile', () => {
        const { getByTestId } = render(<HomePage />);
        expect(getByTestId(/github/i)).toHaveAttribute('href', 'https://www.github.com/mamaya1');
    });

    it('should have a valid link to Email', () => {
        const { getByTestId } = render(<HomePage />);
        expect(getByTestId(/email/i)).toHaveAttribute('href', 'mailto:mario.amaya.web@gmail.com');
    });
})