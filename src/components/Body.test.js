import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body component', () => {

    beforeEach(() => {
        render(<Body />);
    });

    it('renders the first text correctly', () => {
        screen.getByText(/food delivered straight to your doorstep/i);
    });
    it('renders the second text correctly', () => {
        screen.getByText(/get yourself food without leaving your home/i);
    });
    it('renders the button text correctly', () => {
        screen.getByText(/shop now/i);
    });
});