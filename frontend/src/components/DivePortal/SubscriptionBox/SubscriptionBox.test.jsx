import { render } from '@testing-library/react';
import React from 'react';
import SubscriptionBox from './SubscriptionBox';

describe('SubscriptionBox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<SubscriptionBox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('SubscriptionBox')).toBeTruthy();
    });
});
