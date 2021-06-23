import { render } from '@testing-library/react';
import React from 'react';
import GearChecklists from './GearChecklists';

describe('GearChecklists', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<GearChecklists {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('GearChecklists')).toBeTruthy();
    });
});
