import { render } from '@testing-library/react';
import React from 'react';
import AddAnItem from './AddAnItem';

describe('AddAnItem', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<AddAnItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AddAnItem')).toBeTruthy();
    });
});
