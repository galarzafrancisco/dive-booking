import { render } from '@testing-library/react';
import React from 'react';
import ItemPortal from './ItemPortal';

describe('ItemPortal', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ItemPortal {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ItemPortal')).toBeTruthy();
    });
});
