import { render } from '@testing-library/react';
import React from 'react';
import DiverBox from './DiverBox';

describe('DiverBox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<DiverBox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DiverBox')).toBeTruthy();
    });
});
