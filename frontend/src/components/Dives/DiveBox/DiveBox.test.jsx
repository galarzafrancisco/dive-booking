import { render } from '@testing-library/react';
import React from 'react';
import DiveBox from './DiveBox';

describe('DiveBox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<DiveBox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DiveBox')).toBeTruthy();
    });
});
