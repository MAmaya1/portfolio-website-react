import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

// Import Component
import NavBar from '../components/NavBar';

afterEach(cleanup);

describe('NavBar component', () => {
    it('should render without crashing', () => {
        render(
            <Router>
                <NavBar />
            </Router>
        );
    });

    it('should match Snapshot', () => {
        const wrapper = render(<Router><NavBar /></Router>);
        expect(wrapper).toMatchSnapshot();
    });
});