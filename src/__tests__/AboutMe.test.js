import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import AboutMePage from '../components/AboutMePage';

afterEach(cleanup);

describe('About Me component', () => {
    it('should render component without crashing', () => {
        render(<AboutMePage />);
    });

    it('should match Snapshot', () => {
        const wrapper = render(<AboutMePage />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render an "About Me" heading', () => {
        const { getByText } = render(<AboutMePage />);
        expect(getByText(/about/i)).toBeInTheDocument();
    });

    it('should render a capitalized "BIO" subheading', () => {
        const { getByText } = render(<AboutMePage />);
        expect(getByText(/bio/i)).toBeInTheDocument();
    });

    it('should contain a "Technical Skills" section', () => {
        const { getByText } = render(<AboutMePage />);
        expect(getByText(/technical skills/i)).toBeInTheDocument();
    });

    it('should contain a "Professional Skills" section', () => {
        const { getByText } = render(<AboutMePage />);
        expect(getByText(/professional skills/i)).toBeInTheDocument();
    });

    it('should contain a "Personal Interests" section', () => {
        const { getByText } = render(<AboutMePage />);
        expect(getByText(/personal interests/i)).toBeInTheDocument();
    });
})