import { render } from '@testing-library/react';
import React from 'react';
import GearBox from './GearBox';

describe('GearBox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<GearBox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('GearBox')).toBeTruthy();
    });
});
