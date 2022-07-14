import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body component', () => {

    beforeEach(() => {
        render(<Body />);
    });

    it('renders the first text correctly', () => {
        screen.getByText(/all-purpose goods delivered straight to your doorstep/i);
    });
    it('renders the second text correctly', () => {
        screen.getByText((content, node) => {
            const hasText = (node) => node.textContent === 'Get yourself a red potion without leaving your home';
            const nodeHasText = hasText(node);
            const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

            return nodeHasText && childrenDontHaveText;
        });
    });
    it('renders the button text correctly', () => {
        screen.getByText(/shop now/i);
    });
});