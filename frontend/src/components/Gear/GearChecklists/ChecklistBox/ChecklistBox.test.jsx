import { render } from '@testing-library/react';
import React from 'react';
import ChecklistBox from './ChecklistBox';

describe('ChecklistBox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<ChecklistBox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('ChecklistBox')).toBeTruthy();
    });
});
