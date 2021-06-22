import { render } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Navbar {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Navbar')).toBeTruthy();
    });
});
