import { render } from '@testing-library/react';
import React from 'react';
import AddADiver from './AddADiver';

describe('AddADiver', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<AddADiver {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AddADiver')).toBeTruthy();
    });
});
