import { render } from '@testing-library/react';
import React from 'react';
import Items from './Items';

describe('Items', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Items {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Items')).toBeTruthy();
    });
});
