import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header component", () => {

    beforeEach(() => {
        render(<Header />);
    });

    it('renders correct heading', () => {
        screen.getByRole('heading', {
            level: 1,
            name: /thoreats/i,
        });
    });

    it('displays home list item', () => {
        screen.getByRole('heading', {
            level: 4,
            name: /home/i,
        });
    });

    it('displays shop list item', () => {
        screen.getByRole('heading', {
            level: 4,
            name: /shop/i,
        });
    });
});
