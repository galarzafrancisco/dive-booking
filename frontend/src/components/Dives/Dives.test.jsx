import { render } from '@testing-library/react';
import React from 'react';
import Dives from './Dives';

describe('Dives', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Dives {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Dives')).toBeTruthy();
    });
});
