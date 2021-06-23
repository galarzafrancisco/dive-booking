import { render } from '@testing-library/react';
import React from 'react';
import GearChecklistPortal from './GearChecklistPortal';

describe('GearChecklistPortal', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<GearChecklistPortal {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('GearChecklistPortal')).toBeTruthy();
    });
});
