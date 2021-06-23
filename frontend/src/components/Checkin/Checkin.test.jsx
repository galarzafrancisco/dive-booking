import { render } from '@testing-library/react';
import React from 'react';
import Checkin from './Checkin';

describe('Checkin', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Checkin {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Checkin')).toBeTruthy();
    });
});
