import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe("Header component", () => {

    beforeEach(() => {
        render(<Header />);
    });

    it('renders correct heading', () => {
        screen.getByText(/general store/i);
    });

    it('displays home list item', () => {
        screen.getByText(/home/i);
    });

    it('displays shop list item', () => {
        screen.getByText(/shop/i);
    });
    it('renders shopping bag cart icon', () => {
        screen.getByRole('img');
    })
});
