import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CopyRight from './CopyRight';

describe('Test For CopyRight', () => {
	test('CopyRight Render', () => {
		console.log('run test');
		const { asFragment, getByText } = render(<CopyRight />);
		expect(getByText('💓https://MySetsuna.github.io/hot-soup')).toBeDefined();
		expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <p
            class="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-1vl95ex-MuiTypography-root"
          >
            Copyright ©
            <a
              class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1cghntr-MuiTypography-root-MuiLink-root"
              href="https://MySetsuna.github.io/hot-soup"
            >
              💓https://MySetsuna.github.io/hot-soup
            </a>
            2023
          </p>
        </DocumentFragment>
      `);
	});
});
