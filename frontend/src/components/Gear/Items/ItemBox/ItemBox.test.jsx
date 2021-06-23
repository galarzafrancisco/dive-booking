import { render } from '@testing-library/react';
import React from 'react';
import ItemBox from './ItemBox';

describe('ItemBox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ItemBox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ItemBox')).toBeTruthy();
    });
});
