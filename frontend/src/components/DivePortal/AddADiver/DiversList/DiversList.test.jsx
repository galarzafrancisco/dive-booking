import { render } from '@testing-library/react';
import React from 'react';
import DiversList from './DiversList';

describe('DiversList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<DiversList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DiversList')).toBeTruthy();
    });
});
