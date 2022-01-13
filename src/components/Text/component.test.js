// Text test
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Text from './component';

let wrapper = props => <Text {...props} />;

describe('Text', () => {

	it('should render', () => {
		const { getByText } = render(wrapper());

		expect(getByText('Template component').textContent).toBeTruthy();
	});
});