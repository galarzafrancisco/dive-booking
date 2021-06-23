import { render } from '@testing-library/react';
import React from 'react';
import Gear from './Gear';

describe('Gear', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Gear {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Gear')).toBeTruthy();
    });
});
