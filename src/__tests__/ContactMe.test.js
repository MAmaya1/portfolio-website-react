import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import ContactMe from '../components/ContactMePage';

afterEach(cleanup);

describe('ContactMe component', () => {
    it('should render without crashing', () => {
        render(<ContactMe />);
    });

    it('should match Snapshot', () => {
        const wrapper = render(<ContactMe />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an appropriate heading', () => {
        const { getByText } = render(<ContactMe />);
        expect(getByText('Contact')).toBeInTheDocument();
    });

    it('should have a link to the correct contact email', () => {
        const { getByText } = render(<ContactMe />);
        expect(getByText('mario.amaya.web@gmail.com')).toHaveAttribute('href', 'mailto:mario.amaya.web@gmail.com');
    });

    it('should render the correct phone number', () => {
        const { getByText } = render(<ContactMe />);
        expect(getByText('(619) 502-0073')).toBeInTheDocument();
    });

    it('should contain a link to the correct LinkedIn profile', () => {
        const { getByText } = render(<ContactMe />);
        expect(getByText('marioamayaweb')).toHaveAttribute('href', 'https://www.linkedin.com/in/marioamayaweb');
    });

    it('should contain a link to the correct GitHub profile', () => {
        const { getByText } = render(<ContactMe />);
        expect(getByText('MAmaya1')).toHaveAttribute('href', 'https://github.com/MAmaya1');
    });
});