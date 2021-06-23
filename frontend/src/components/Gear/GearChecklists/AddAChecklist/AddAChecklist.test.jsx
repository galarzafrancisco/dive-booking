import { render } from '@testing-library/react';
import React from 'react';
import AddAChecklist from './AddAChecklist';

describe('AddAChecklist', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<AddAChecklist {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AddAChecklist')).toBeTruthy();
    });
});
