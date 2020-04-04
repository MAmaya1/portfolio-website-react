import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import Portfolio from '../components/PortfolioPage';

afterEach(cleanup);

describe('Portfolio Page component', () => {
    it('should render component without crashing', () => {
        render(<Portfolio />);
    });

    it('should match Snapshot', () => {
        const wrapper = (<Portfolio />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a title for Find My Reps', () => {
        const { getByText } = render(<Portfolio />);
        expect(getByText('Find My Reps')).toBeInTheDocument();
    });

    it('should render a title for Founder Grants', () => {
        const { getByText } = render(<Portfolio />);
        expect(getByText('FounderGrants.com')).toBeInTheDocument();
    });

    it('should render a title for IntelliFlight', () => {
        const { getByText } = render(<Portfolio />);
        expect(getByText('IntelliFlight')).toBeInTheDocument();
    });

    it('should render a title for Foodie Fun', () => {
        const { getByText } = render(<Portfolio />);
        expect(getByText('Foodie Fun')).toBeInTheDocument();
    });

    it('should render a title for Tacopedia', () => {
        const { getByText } = render(<Portfolio />);
        expect(getByText('Yelp Tacopedia')).toBeInTheDocument();
    });

    it('should contain correct link to 1517 Fund url', () => {
        const { getByTestId } = render(<Portfolio />);
        expect(getByTestId('1517Url')).toHaveAttribute('href', 'https://www.1517fund.com/')
    });

    it('should contain correct link to Google Play url', () => {
        const { getByTestId } = render(<Portfolio />);
        expect(getByTestId('findMyRepsUrl')).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=com.marioamayasd.find_my_reps')
    });

    it('should contain correct link to Founder Grants url', () => {
        const { getByTestId } = render(<Portfolio />);
        expect(getByTestId('founderGrantsUrl')).toHaveAttribute('href', 'https://www.foundergrants.com/')
    });

    it('should contain correct link to IntelliFlight url', () => {
        const { getByTestId } = render(<Portfolio />);
        expect(getByTestId('intelliFlightUrl')).toHaveAttribute('href', 'https://www.intelliflight.app/')
    });

    it('should contain correct link to Foodie Fun url', () => {
        const { getByTestId } = render(<Portfolio />);
        expect(getByTestId('foodieFunUrl')).toHaveAttribute('href', 'https://elated-pasteur-bcba0d.netlify.com/')
    });

    it('should contain correct link to Yelp Tacopedia url', () => {
        const { getByTestId } = render(<Portfolio />);
        expect(getByTestId('tacopediaUrl')).toHaveAttribute('href', 'https://yelp-tacopedia.netlify.com/')
    });

    it('should render custom buttons as active links', () => {
        const { getAllByText } = render(<Portfolio />);
        getAllByText('View GitHub').map(item => {
            expect(item).toHaveAttribute('href');
        });
    });
})