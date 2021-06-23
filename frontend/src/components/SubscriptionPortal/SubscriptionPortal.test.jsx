import { render } from '@testing-library/react';
import React from 'react';
import SubscriptionPortal from './SubscriptionPortal';

describe('SubscriptionPortal', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<SubscriptionPortal {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('SubscriptionPortal')).toBeTruthy();
    });
});
