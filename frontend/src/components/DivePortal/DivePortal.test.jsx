import { render } from '@testing-library/react';
import React from 'react';
import DivePortal from './DivePortal';

describe('DivePortal', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<DivePortal {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DivePortal')).toBeTruthy();
    });
});
